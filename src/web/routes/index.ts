import { json, Application } from 'express';
import cors from 'cors';

export class RouteBuilder {
  static build(app: Application): void {
    app.use(json());
    // enable cors for all routes (for now)
    app.use(cors());
  }
}
