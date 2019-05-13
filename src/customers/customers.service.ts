import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ICustomer } from './customer.interface';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  @InjectModel('Customer')
  private readonly customerModel: Model<ICustomer>;

  getCustomersFromDb(): Promise<ICustomer[]> {
    return this.customerModel.find({});
  }

  createCustomerInDb(newCustomer: CreateCustomerDto): Promise<ICustomer> {
    const newCustomerModel = new this.customerModel(newCustomer);
    return newCustomerModel.save();
  }

  getCustomerFromDb(id: string): Promise<ICustomer> {
    return this.customerModel.findById(id);
  }

  updateCustomerInDb(id: string, updateFields: UpdateCustomerDto): Promise<ICustomer> {
    return this.customerModel.findByIdAndUpdate(id, updateFields, { new: true });
  }

  deleteCustomerInDb(id: string): Promise<ICustomer> {
    return this.customerModel.findByIdAndDelete(id);
  }
}
