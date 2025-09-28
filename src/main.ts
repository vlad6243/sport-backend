import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { RoleService } from './user/role.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for web and mobile app
  app.enableCors({
    origin: true, // Разрешить все origins в dev режиме
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    credentials: false, // Убираем credentials для упрощения
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Initialize default roles
  const roleService = app.get(RoleService);
  await roleService.createDefaultRoles();

  const port = configService.get<number>('port');
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();