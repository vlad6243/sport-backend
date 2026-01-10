import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { validateTelegramInitData } from './telegram-auth.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    const payload = { sub: user.id, email: user.email, lang: user.lang };
    const token = this.jwtService.sign(payload);

    return {
      user,
      access_token: token,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.userService.validatePassword(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, lang: user.lang };
    const token = this.jwtService.sign(payload);
    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token: token,
    };
  }

  async telegramLogin(initData: string) {
    const botToken = this.configService.get<string>('telegram.botToken');
    if (!botToken) {
      throw new UnauthorizedException('Telegram bot token is not configured');
    }

    const configuredMaxAge = this.configService.get<number>(
      'telegram.authMaxAgeSeconds',
    );
    const maxAgeSeconds = Number.isFinite(configuredMaxAge)
      ? configuredMaxAge
      : 86400;

    let telegramPayload: ReturnType<typeof validateTelegramInitData>;
    try {
      telegramPayload = validateTelegramInitData(
        initData,
        botToken,
        maxAgeSeconds,
      );
    } catch (error) {
      throw new UnauthorizedException((error as Error).message);
    }

    const telegramUser = telegramPayload.user;
    const email = this.buildTelegramEmail(telegramUser.id);
    let user = await this.userService.findByEmail(email);
    const preferredLang = this.mapTelegramLanguage(
      telegramUser.language_code,
    );

    if (!user) {
      const createUserDto: CreateUserDto = {
        email,
        password: randomBytes(32).toString('hex'),
        firstName: telegramUser.first_name || 'Telegram',
        lastName: telegramUser.last_name || '',
      };
      const createdUser = await this.userService.create(createUserDto);
      user = createdUser;
      if (preferredLang && preferredLang !== createdUser.lang) {
        const updated = await this.userService.updateProfile(createdUser.id, {
          lang: preferredLang,
        });
        if (updated) {
          user = updated;
        }
      }
    } else {
      const updates: Partial<{
        firstName: string;
        lastName: string;
        lang: string;
      }> = {};

      if (
        telegramUser.first_name &&
        telegramUser.first_name !== user.firstName
      ) {
        updates.firstName = telegramUser.first_name;
      }

      if (
        telegramUser.last_name !== undefined &&
        telegramUser.last_name !== user.lastName
      ) {
        updates.lastName = telegramUser.last_name || '';
      }

      if (preferredLang && preferredLang !== user.lang) {
        updates.lang = preferredLang;
      }

      if (Object.keys(updates).length) {
        const updated = await this.userService.updateProfile(user.id, updates);
        if (updated) {
          user = updated;
        }
      }
    }

    const safeUser = this.stripPassword(user);
    const payload = { sub: safeUser.id, email: safeUser.email, lang: safeUser.lang };
    const token = this.jwtService.sign(payload);

    return {
      user: safeUser,
      access_token: token,
    };
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userService.findById(payload.sub);
      if (user) {
        console.log('Validated user:', user, payload);
        // Use lang from token if available (in case user updated their language)
        user.lang = payload.lang || user.lang || 'en';
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  private stripPassword(user: any) {
    if (!user || typeof user !== 'object') {
      return user;
    }

    const { password, ...rest } = user;
    return rest;
  }

  private buildTelegramEmail(telegramId: number) {
    return `telegram-${telegramId}@telegram.local`;
  }

  private mapTelegramLanguage(languageCode?: string) {
    if (!languageCode) {
      return undefined;
    }

    if (languageCode.startsWith('ru')) {
      return 'ru';
    }

    if (languageCode.startsWith('en')) {
      return 'en';
    }

    if (languageCode === 'uk' || languageCode === 'ua') {
      return 'uk';
    }

    return undefined;
  }
}
