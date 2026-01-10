import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { Role, RoleName } from './role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      email: createUserDto.email,
      password: hashedPassword,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
    });

    // Assign default USER role
    const userRole = await this.roleService.findByName(RoleName.USER);
    if (userRole) {
      user.roles = [userRole];
    }

    const savedUser = await this.userRepository.save(user);
    const { password, ...result } = savedUser;
    return result;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['roles'],
    });
  }

  async findById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['roles'],
    });
    if (!user) return null;

    const { password, ...result } = user;
    return result;
  }

  async addRoleToUser(userId: string, roleName: RoleName): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles'],
    });

    if (!user) {
      throw new ConflictException('User not found');
    }

    const role = await this.roleService.findByName(roleName);
    if (!role) {
      throw new ConflictException('Role not found');
    }

    const hasRole = user.roles.some(userRole => userRole.name === roleName);
    if (!hasRole) {
      user.roles.push(role);
      await this.userRepository.save(user);
    }
  }

  async removeRoleFromUser(userId: string, roleName: RoleName): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles'],
    });

    if (!user) {
      throw new ConflictException('User not found');
    }

    user.roles = user.roles.filter(role => role.name !== roleName);
    await this.userRepository.save(user);
  }

  async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async updateProfile(
    userId: string,
    updates: Partial<Pick<User, 'firstName' | 'lastName' | 'lang'>>,
  ): Promise<Omit<User, 'password'> | null> {
    if (!Object.keys(updates).length) {
      return this.findById(userId);
    }

    await this.userRepository.update(userId, updates);
    return this.findById(userId);
  }
}
