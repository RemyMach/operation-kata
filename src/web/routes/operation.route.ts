import { Router } from 'express';
import { Route } from '../core/route';
import { OperationDtoValidator } from '../controllers/operations/dto/validators/opearation-dto.validator';
import { OperationController } from '../controllers/operations/operation-controller';

export class OperationRoute implements Route {
  private readonly router: Router;
  private readonly validator: OperationDtoValidator;

  constructor() {
    this.router = Router();
    this.validator = new OperationDtoValidator();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '',
      this.validator.validate,
      OperationController.doOperation,
    );
  }

  exposeRoutes(): Router {
    return this.router;
  }
}
