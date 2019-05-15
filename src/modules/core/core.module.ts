import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CustomersService } from '../customers/customers.service';
import { SharedModule } from '../shared/shared.module';

import { LoggerMiddleware } from './logger.middleware';
import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [
    SharedModule,
  ],
  providers: [
    CustomersService,
    ConfigService,
  ],
  exports: [
    CustomersService,
    ConfigService,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*');
  }
}
