import { Router } from 'express';
import { ExampleController } from '../controllers/example-controller';
import { ExampleDtoValidator } from '../controllers/dto/validators/example-dto.validator';
import { Route } from './route';

export class ExampleRoute implements Route {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '',
      new ExampleDtoValidator().validate,
      ExampleController.example,
    );
  }

  exposeRoutes(): Router {
    return this.router;
  }
}
