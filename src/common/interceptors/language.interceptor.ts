import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LanguageInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    // Extract lang from JWT token directly
    let userLang = 'en';
    try {
      const authHeader = request.headers.authorization;
      if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
          const payload = this.jwtService.decode(token) as any;
          userLang = payload?.lang || 'en';
        }
      }
    } catch (error) {
      // If token parsing fails, use default language
      userLang = 'en';
    }

    return next.handle().pipe(
      map(data => {
        const transformed = this.transformTranslations(data, userLang);
        return transformed;
      }),
    );
  }

  private transformTranslations(data: any, lang: string): any {
    if (!data) return data;

    // Skip Date objects and other special types
    if (
      data instanceof Date ||
      data instanceof RegExp ||
      data instanceof Error
    ) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.transformTranslations(item, lang));
    }

    if (typeof data === 'object') {
      // Check if this is a translated object (has ru, en, ua/uk keys)
      if (this.isTranslatedObject(data)) {
        const normalizedLang = lang === 'uk' ? 'ua' : lang;
        if (normalizedLang === 'ua') {
          return data.ua || data.uk || data.en || Object.values(data)[0];
        }
        return (
          data[normalizedLang] ||
          data.en ||
          data.ua ||
          data.uk ||
          Object.values(data)[0]
        );
      }

      // Transform nested objects
      const transformed: any = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          transformed[key] = this.transformTranslations(data[key], lang);
        }
      }
      return transformed;
    }

    return data;
  }

  private isTranslatedObject(obj: any): boolean {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }

    const keys = Object.keys(obj);
    const languageKeys = ['ru', 'en', 'ua', 'uk'];
    const hasTranslationKeys = languageKeys.some(key => keys.includes(key));
    const allKeysAreLanguages = keys.every(key =>
      languageKeys.includes(key),
    );

    return hasTranslationKeys && allKeysAreLanguages;
  }
}
