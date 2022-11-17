import { Request, Response } from 'express';
import { DoOperationService } from '../../../services/do-operation.service';

export class OperationController {
  static async doOperation(
    req: Request,
    res: Response,
  ): Promise<Response<{ result: number }>> {
    const createOperationService = new DoOperationService();
    try {
      const result = createOperationService.doOperation(req.body.operationsDto);
      return res.status(200).json({ result }).end();
    } catch (error) {
      return res.status(500).json({
        messages: [
          {
            name: 'server',
            message: 'Internal server error',
          },
        ],
      });
    }
  }
}
