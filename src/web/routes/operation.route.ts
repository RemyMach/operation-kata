import { Router } from 'express';
import { Route } from '../core/route';
import { OperationDtoValidator } from '../controllers/operations/dto/validators/opearation-dto.validator';
import { OperationController } from '../controllers/operations/operation-controller';

export class OperationRoute implements Route {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '',
      new OperationDtoValidator().validate,
      OperationController.doOperation,
    );
  }

  exposeRoutes(): Router {
    return this.router;
  }
}
