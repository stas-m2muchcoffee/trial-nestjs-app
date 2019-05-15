import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigService } from './modules/core/services/config.service';
import { CustomersModule } from './modules/customers/customers.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    CoreModule,
    SharedModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('MONGODB_URI'),
        useNewUrlParser: true,
      }),
    }),
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
