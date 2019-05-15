import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { HttpExceptionsFilter } from './modules/shared/errors/http-exceptions.filter';
import { ValidationPipe } from './modules/shared/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
