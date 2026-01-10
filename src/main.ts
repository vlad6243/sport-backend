import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { RoleService } from './user/role.service';
import { LanguageInterceptor } from './common/interceptors/language.interceptor';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  const configService = app.get(ConfigService);
  const jwtService = app.get(JwtService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LanguageInterceptor(jwtService));

  // Enable CORS for Telegram Mini App on Vercel
  const allowedOrigins = [
    'http://localhost:5173', // Vite dev
    'http://localhost:4173', // Vite preview
    'https://web.telegram.org', // Telegram Web
    process.env.FRONTEND_URL, // Vercel production URL
  ].filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      // Allow Vercel preview deployments (sport-telegram-app-*.vercel.app)
      if (origin.includes('.vercel.app')) return callback(null, true);

      // Check allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error('Not allowed by CORS'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'X-Requested-With',
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Set global prefix
  app.setGlobalPrefix('api');

  // Initialize default roles
  const roleService = app.get(RoleService);
  await roleService.createDefaultRoles();

  const port = configService.get<number>('port');
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 NestJS + Fastify running on: http://localhost:${port}`);
}
bootstrap();
