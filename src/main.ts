import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  // enabling cors
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
});

// app.enableCors({
//   origin: [
//     'http://localhost:3000',
//     'http://localhost:999',
//     'https://react-admin-ts.vercel.app',
//   ],
//   methods: ["GET", "POST","PUT","DELETE","PATCH","OPTIONS"],
//   credentials: true,
// });

  await app.listen(3300);
}
bootstrap();
