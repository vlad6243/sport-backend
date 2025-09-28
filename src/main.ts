import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { RoleService } from './user/role.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false })
  );
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for web and mobile app
  app.enableCors({
    origin: true, // Allow all origins in dev mode
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    credentials: false, // Remove credentials for simplicity
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Initialize default roles
  const roleService = app.get(RoleService);
  await roleService.createDefaultRoles();

  const port = configService.get<number>('port');
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 NestJS + Fastify running on: http://localhost:${port}`);
}
bootstrap();