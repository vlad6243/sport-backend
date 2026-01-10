import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TelegramAuthDto } from './dto/telegram-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Auth } from './decorators/auth.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { RoleName } from '../user/role.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('telegram')
  async telegramLogin(@Body() telegramAuthDto: TelegramAuthDto) {
    return this.authService.telegramLogin(telegramAuthDto.initData);
  }

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser() user: any) {
    return user;
  }

  @Get('admin')
  @Auth(RoleName.ADMIN)
  async getAdminData(@CurrentUser() user: any) {
    return { message: 'Admin only data', user };
  }

  @Get('moderator')
  @Auth(RoleName.ADMIN, RoleName.MODERATOR)
  async getModeratorData(@CurrentUser() user: any) {
    return { message: 'Admin and Moderator data', user };
  }
}
