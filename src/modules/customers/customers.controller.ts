import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

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
  createCustomer(@Body() newCustomer: CreateCustomerDto): Promise<ICustomer> {
    return this.customersService.createCustomerInDb(newCustomer);
  }

  @Get(':id')
  getCustomer(@Param('id') id: string): Promise<ICustomer> {
    return this.customersService.getCustomerFromDb(id);
  }

  @Put(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body() updateFields: UpdateCustomerDto,
  ): Promise<ICustomer> {
    return this.customersService.updateCustomerInDb(id, updateFields);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteCustomer(@Param('id') id: string): Promise<ICustomer> {
    return this.customersService.deleteCustomerInDb(id);
  }
}
