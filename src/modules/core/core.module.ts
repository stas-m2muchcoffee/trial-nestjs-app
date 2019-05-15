import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CustomersService } from '../customers/customers.service';
import { SharedModule } from '../shared/shared.module';

import { LoggerMiddleware } from './logger.middleware';

@Global()
@Module({
  imports: [
    SharedModule,
  ],
  providers: [
    CustomersService,
  ],
  exports: [
    CustomersService,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*');
  }
}
