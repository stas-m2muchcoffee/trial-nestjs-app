import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ICustomer } from './customer.interface';

@Injectable()
export class CustomersService {
  @InjectModel('Customer')
  private readonly customerModel: Model<ICustomer>;

  getCustomersFromDb(): Promise<ICustomer[]> {
    return this.customerModel.find({});
  }
}
