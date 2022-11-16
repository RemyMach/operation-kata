import { Router } from 'express';

export interface Route {
  exposeRoutes(): Router;
}
