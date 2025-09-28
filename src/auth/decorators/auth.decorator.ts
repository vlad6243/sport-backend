import { UseGuards, applyDecorators } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { RoleName } from '../../user/role.entity';
import { Roles } from './roles.decorator';

export function Auth(...roles: RoleName[]) {
  const decorators = [UseGuards(JwtAuthGuard)];

  if (roles.length > 0) {
    decorators.push(Roles(...roles));
    decorators.push(UseGuards(RolesGuard));
  }

  return applyDecorators(...decorators);
}