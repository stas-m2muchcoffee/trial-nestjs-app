import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { HttpExceptionsFilter } from './core/filters/http-exceptions.filter';
import { ValidationPipe } from './shared/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
