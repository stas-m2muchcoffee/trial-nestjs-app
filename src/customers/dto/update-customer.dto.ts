import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsPhoneNumber('UA')
  readonly phone?: string;
}
