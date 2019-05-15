import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './modules/customers/customers.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    CoreModule,
    SharedModule,
    MongooseModule.forRoot('mongodb://localhost:27017/invoice-app-api', { useNewUrlParser: true }),
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
