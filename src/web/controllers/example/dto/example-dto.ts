import { IsString, IsNotEmpty } from 'class-validator';

export class ExampleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
