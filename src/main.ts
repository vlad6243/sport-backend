import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { RoleService } from './user/role.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  // Initialize default roles
  const roleService = app.get(RoleService);
  await roleService.createDefaultRoles();

  const port = configService.get<number>('port');
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();