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

  createCustomerInDb(newCustomer: ICustomer): Promise<ICustomer> {
    const newCustomerModel = new this.customerModel(newCustomer);
    return newCustomerModel.save();
  }

  getCustomerFromDb(id: string): Promise<ICustomer> {
    return this.customerModel.findById(id);
  }

  updateCustomerInDb(id: string, updateFields: ICustomer): Promise<ICustomer> {
    return this.customerModel.findByIdAndUpdate(id, updateFields, { new: true });
  }
}
