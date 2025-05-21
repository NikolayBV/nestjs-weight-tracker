import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
