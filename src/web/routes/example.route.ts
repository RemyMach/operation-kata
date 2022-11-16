import { Router } from 'express';
import { ExampleController } from '../controllers/example-controller';
import { ExampleDtoValidator } from '../controllers/dto/validators/example-dto.validator';

export class ExampleRoute {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(
      '',
      new ExampleDtoValidator().validate,
      ExampleController.example,
    );
  }
}
