import { Request, Response } from 'express';
import { CreateExampleService } from '../../../services/create-example.service';
import { ExampleResponse } from './responses/example-response';

export class ExampleController {
  static async example(
    req: Request,
    res: Response,
  ): Promise<Response<ExampleResponse>> {
    const createMailService = new CreateExampleService();
    const example = await createMailService.createExample(
      req.body.example.name,
    );
    return res.status(200).json(new ExampleResponse(example.name)).end();
  }
}
