import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { validateTelegramInitData } from './telegram-auth.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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
    const telegramId = String(telegramUser.id);
    let user = await this.userService.findByTelegramId(telegramId);
    const preferredLang = this.mapTelegramLanguage(
      telegramUser.language_code,
    );

    if (!user) {
      const createdUser = await this.userService.createFromTelegram({
        telegramId,
        firstName: telegramUser.first_name || 'Telegram',
        lastName: telegramUser.last_name,
        username: telegramUser.username,
        photoUrl: telegramUser.photo_url,
        lang: preferredLang,
      });
      user = createdUser;
    } else {
      const updates: Partial<{
        firstName: string;
        lastName: string;
        lang: string;
        username: string;
        photoUrl: string;
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

      if (
        telegramUser.username !== undefined &&
        telegramUser.username !== user.username
      ) {
        updates.username = telegramUser.username || '';
      }

      if (
        telegramUser.photo_url !== undefined &&
        telegramUser.photo_url !== user.photoUrl
      ) {
        updates.photoUrl = telegramUser.photo_url || '';
      }

      if (Object.keys(updates).length) {
        const updated = await this.userService.updateProfile(user.id, updates);
        if (updated) {
          user = updated;
        }
      }
    }

    const payload = {
      sub: user.id,
      telegramId: user.telegramId,
      lang: user.lang,
    };
    const token = this.jwtService.sign(payload);

    return {
      user,
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

    if (languageCode.startsWith('uk') || languageCode.startsWith('ua')) {
      return 'ua';
    }

    return undefined;
  }
}
