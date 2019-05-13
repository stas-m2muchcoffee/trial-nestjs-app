import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/invoice-app-api')],
  controllers: [AppController, CustomersController],
  providers: [AppService],
})
export class AppModule {}
