import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, RoleName } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findByName(name: RoleName): Promise<Role | null> {
    return this.roleRepository.findOne({ where: { name } });
  }

  async createDefaultRoles(): Promise<void> {
    const roles = [
      { name: RoleName.ADMIN, description: 'Administrator with full access' },
      {
        name: RoleName.MODERATOR,
        description: 'Moderator with limited admin access',
      },
      { name: RoleName.USER, description: 'Regular user' },
    ];

    for (const roleData of roles) {
      const existingRole = await this.findByName(roleData.name);
      if (!existingRole) {
        const role = this.roleRepository.create(roleData);
        await this.roleRepository.save(role);
      }
    }
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }
}
