import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
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
  createCustomer(@Body() newCustomer: CustomerDto): Promise<ICustomer> {
    return this.customersService.createCustomerInDb(newCustomer);
  }

  @Get(':id')
  getCustomer(@Param('id') id: string): Promise<ICustomer> {
    return this.customersService.getCustomerFromDb(id);
  }
}
