import { Request, Response, NextFunction } from 'express';
import { Validator } from '../../../../core/validator';
import { validate } from 'class-validator';
import { OperationsDto } from '../opearation-dto';
import { isArray } from 'class-validator';

export class OperationDtoValidator implements Validator {
  public async validate(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    if (!req.body.operations || !isArray(req.body.operations)) {
      return res.status(400).json({
        messages: [
          {
            name: 'operations',
            message: 'operations is not an array',
          },
        ],
      });
    }

    for (const operation of req.body.operations) {
      const operationDto = new OperationsDto(
        operation.operand,
        operation.value,
      );
      const errors = await validate(operationDto);
      if (errors.length) {
        return res.status(400).json({
          messages: errors.map((error) => ({
            name: error.property,
            message: error.constraints,
          })),
        });
      }
      req.body.operationsDto =
        req.body.operationsDto === undefined ? [] : req.body.operationsDto;
      req.body.operationsDto.push(operationDto);
    }
    return next();
  }
}
