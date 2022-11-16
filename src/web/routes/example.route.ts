import { Router } from 'express';
import { ExampleController } from '../controller/example-controller';

class ExampleRoute {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post('', ExampleController.example);
  }
}
