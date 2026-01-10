import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { RoleService } from './user/role.service';
import { APIGatewayProxyResult, Context } from 'aws-lambda';
import { LanguageInterceptor } from './common/interceptors/language.interceptor';
import { JwtService } from '@nestjs/jwt';

let cachedApp: NestFastifyApplication;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({
        logger: false,
        trustProxy: true,
      }),
      { logger: false },
    );

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    );

    const jwtService = app.get(JwtService);
    app.useGlobalInterceptors(new LanguageInterceptor(jwtService));

    app.enableCors({
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'Origin',
        'X-Requested-With',
      ],
      credentials: false,
    });

    // Set global prefix
    app.setGlobalPrefix('api');

    // Initialize default roles
    const roleService = app.get(RoleService);
    await roleService.createDefaultRoles();

    await app.init();
    await app.getHttpAdapter().getInstance().ready();

    cachedApp = app;
  }

  return cachedApp;
}

export const handler = async (
  event: any, // Use any to support both v1 and v2 formats
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const app = await bootstrap();
  const fastifyInstance = app.getHttpAdapter().getInstance();

  // API Gateway v2 uses rawPath instead of path
  const path = event.rawPath || event.path || '/';
  const method =
    event.requestContext?.http?.method || event.httpMethod || 'GET';

  const url =
    path +
    (event.queryStringParameters
      ? '?' + new URLSearchParams(event.queryStringParameters).toString()
      : '');

  try {
    const response = await fastifyInstance.inject({
      method: method as any,
      url,
      headers: event.headers,
      payload: event.body,
      remoteAddress: event.requestContext?.identity?.sourceIp,
    });

    return {
      statusCode: response.statusCode,
      headers: response.headers as Record<string, string>,
      body: response.body,
      isBase64Encoded: false,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Internal Server Error',
        message:
          process.env.NODE_ENV === 'development'
            ? (error as Error).message
            : undefined,
      }),
    };
  }
};
