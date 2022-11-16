import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class OperationsDto {
  @IsString()
  @IsNotEmpty()
  operand: string;

  @IsInt()
  value: number;

  constructor(operand: string, value: number) {
    this.operand = operand;
    this.value = value;
  }
}
