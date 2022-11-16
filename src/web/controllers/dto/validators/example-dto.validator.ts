import { Request, Response, NextFunction } from 'express';
import { ExampleDto } from '../example-dto';
import { Validator } from './validator';
import { validate } from 'class-validator';

export class ExampleDtoValidator implements Validator {
  public async validate(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const example = new ExampleDto(req.body.name);

    const errors = await validate(example);
    if (!errors.length) {
      req.body.example = example;
      return next();
    }
    return res.status(400).json({
      messages: errors.map((error) => ({
        name: error.property,
        message: error.constraints,
      })),
    });
  }
}
