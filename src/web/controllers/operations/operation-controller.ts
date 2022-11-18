import { Request, Response } from 'express';
import { OperationLogger } from '../../../utils/logger';
import { DoOperationService } from '../../../services/do-operation.service';
import { mapDtoToCommand } from './mapper';

export class OperationController {
  static async doOperation(
    req: Request,
    res: Response,
  ): Promise<Response<{ result: number }>> {
    const createOperationService = new DoOperationService(0, new OperationLogger(console.log));
    try {
      const commands = req.body.operationsDto.map((el: any) => mapDtoToCommand(el));
      const result = createOperationService.doOperation(commands);
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
