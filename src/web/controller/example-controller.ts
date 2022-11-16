import { Request, Response } from 'express';
import { CreateExampleService } from '../../services/create-example.service';

export class ExampleController {
  static async example(req: Request, res: Response): Promise<void> {
    const createMailService = new CreateExampleService();
    createMailService.createExample();
    res.status(204).end();
  }
}
