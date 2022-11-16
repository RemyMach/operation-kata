import { Calculator } from '../calculate';

export class CreateOperationService {
  constructor() {}

  public doOperation(operations: { operand: string; value: number }[]): number {
    const calculator = new Calculator(0);
    for (const operation of operations) {
      calculator.execute(operation.operand, operation.value);
    }
    return calculator.currentValue;
  }
}
