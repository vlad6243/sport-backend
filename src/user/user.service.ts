import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RoleName } from './role.entity';
import { RoleService } from './role.service';

interface CreateTelegramUserInput {
  telegramId: string;
  firstName: string;
  lastName?: string;
  username?: string;
  photoUrl?: string;
  lang?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  async createFromTelegram(
    input: CreateTelegramUserInput,
  ): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { telegramId: input.telegramId },
    });

    if (existingUser) {
      throw new ConflictException('User with this Telegram ID already exists');
    }

    const user = this.userRepository.create({
      telegramId: input.telegramId,
      firstName: input.firstName,
      lastName: input.lastName,
      username: input.username,
      photoUrl: input.photoUrl,
      ...(input.lang ? { lang: input.lang } : {}),
    });

    // Assign default USER role
    const userRole = await this.roleService.findByName(RoleName.USER);
    if (userRole) {
      user.roles = [userRole];
    }

    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }

  async findByTelegramId(telegramId: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { telegramId },
      relations: ['roles'],
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['roles'],
    });
    if (!user) return null;

    return user;
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

  async updateProfile(
    userId: string,
    updates: Partial<
      Pick<User, 'firstName' | 'lastName' | 'lang' | 'username' | 'photoUrl'>
    >,
  ): Promise<User | null> {
    if (!Object.keys(updates).length) {
      return this.findById(userId);
    }

    await this.userRepository.update(userId, updates);
    return this.findById(userId);
  }
}
