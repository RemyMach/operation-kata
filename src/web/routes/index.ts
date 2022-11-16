import { json, Application } from 'express';
import cors from 'cors';
import { ExampleRoute } from './example.route';
import { OperationRoute } from './operation.route';

export class RouteBuilder {
  static build(app: Application): void {
    app.use(json());
    // enable cors for all routes (for now)
    app.use(cors());
    app.use('/example', new ExampleRoute().exposeRoutes());
    app.use('/operations', new OperationRoute().exposeRoutes());
  }
}
