import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICustomer } from './customer.interface';

import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {

  constructor(
    private readonly customersService: CustomersService,
  ) {
  }

  @Get()
  getCustomers(): Promise<ICustomer[]> {
    return this.customersService.getCustomersFromDb();
  }

  @Post()
  createCustomer(@Body() newCustomer: ICustomer): Promise<ICustomer> {
    return this.customersService.createCustomerInDb(newCustomer);
  }
}
