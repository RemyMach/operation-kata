import { Logger } from "../utils/logger";

export enum Operand {
  ADD = "ADD",
  SUBSTRACT = "SUBSTRACT",
  MULTIPLY = "MULTIPLY",
  DIVIDE = "DIVIDE",
}

export function stringToOperand(str: string): Operand {
  switch (str.toUpperCase()) {
    case 'ADD':
      return Operand.ADD;
    case 'SUBSTRACT':
      return Operand.SUBSTRACT;
    case 'MULTIPLY':
      return Operand.MULTIPLY;
    case 'DIVIDE':
      return Operand.DIVIDE;
    default:
      throw new Error("Operand Unknow");
  }
}

export type OperationCommand = {
  operand: Operand,
  value: number,
};

export class DoOperationService {
  private readonly intialValue: number;
  private readonly logger: Logger;
  constructor(initialValue: number, logger: Logger) {
    this.intialValue = initialValue;
    this.logger = logger;
  }

  public doOperation(operations: OperationCommand[]): number {
    return operations.reduce((previous, current) => {
      this.logger.log(`current value is ${previous} we ${current.operand} the value ${current.value}`);
      switch (current.operand) {
        case Operand.ADD:
          return previous + current.value;
        case Operand.SUBSTRACT:
          return previous - current.value;
        case Operand.MULTIPLY:
          return previous * current.value;
        case Operand.DIVIDE:
          if (current.value === 0) {
            throw new Error('Division by ZERO exception');
          }
          return previous / current.value;
        default:
          throw new Error('Unsupported operation');
      }
   }, this.intialValue);
  }
}
