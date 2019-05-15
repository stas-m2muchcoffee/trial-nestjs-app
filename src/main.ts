import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { ConfigService } from './modules/core/services/config.service';
import { HttpExceptionsFilter } from './modules/shared/errors/http-exceptions.filter';
import { ValidationPipe } from './modules/shared/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  const port = app.get(ConfigService).get('PORT');

  await app.listen(port || 3000);
}
bootstrap();
