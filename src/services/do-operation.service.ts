import { Calculator } from '../calculate';

export class DoOperationService {
  constructor() {}

  public doOperation(operations: { operand: string; value: number }[]): number {
    const calculator = new Calculator(0);
    for (const operation of operations) {
      calculator.execute(operation.operand, operation.value);
    }
    calculator.logOperations();
    return calculator.currentValue;
  }
}
