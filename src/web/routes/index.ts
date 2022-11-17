import { json, Application } from 'express';
import cors from 'cors';
import { OperationRoute } from './operation.route';

export class RouteBuilder {
  static build(app: Application): void {
    app.use(json());
    // enable cors for all routes (for now)
    app.use(cors());
    app.use('/operations', new OperationRoute().exposeRoutes());
  }
}
