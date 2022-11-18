import { Logger } from '../utils/logger';
import { DoOperationService, Operand } from './do-operation.service';

class SpyLogger implements Logger {
  public call: number = 0;
  log(_entry: string): void {
    this.call += 1;
  }
}

describe('test service initialization', () => {
  test('initilization at 0', () => {
    const service = new DoOperationService(0, new SpyLogger());
    expect(service.doOperation([])).toBe(0);
  });

  test('initilization at 4', () => {
    const service = new DoOperationService(4, new SpyLogger());
    expect(service.doOperation([])).toBe(4);
  });

  test('initilization at 7 and apply an operation', () => {
    const service = new DoOperationService(7, new SpyLogger());
    expect(service.doOperation([
      { operand: Operand.SUBSTRACT, value: 3 },
    ])).toBe(4);
  });
});

describe('test do operation use case', () => {
  let doOperationService: DoOperationService;
  let spyLogger: SpyLogger;
  beforeEach(() => {
    spyLogger = new SpyLogger();
    doOperationService = new DoOperationService(0, spyLogger);
  });

  test('should render one when we add 1', () => {
    expect(
      doOperationService.doOperation([{ operand: Operand.ADD, value: 1 }]),
    ).toEqual(1);
    expect(spyLogger.call).toBe(1);
  });

  test('should render two when we add 1 and 1', () => {
    expect(
      doOperationService.doOperation([
        { operand: Operand.ADD, value: 1 },
        { operand: Operand.ADD, value: 1 },
      ]),
    ).toEqual(2);
    expect(spyLogger.call).toBe(2);
  });

  test('should render 1 when we add 2 and subtract 1', () => {
    expect(
      doOperationService.doOperation([
        { operand: Operand.ADD, value: 2 },
        { operand: Operand.SUBSTRACT, value: 1 },
      ]),
    ).toEqual(1);
    expect(spyLogger.call).toBe(2);
  });

  test('should render 0 when we multiply 0 by 2', () => {
    expect(
      doOperationService.doOperation([{ operand: Operand.MULTIPLY, value: 2 }]),
    ).toEqual(0);
    expect(spyLogger.call).toBe(1);
  });

  test('should render 2 when we multiply 1 by 2', () => {
    expect(
      doOperationService.doOperation([
        { operand: Operand.ADD, value: 1 },
        { operand: Operand.MULTIPLY, value: 2 },
      ]),
    ).toEqual(2);
    expect(spyLogger.call).toBe(2);
  });

  test('should render 3 when we devide 9 by 3', () => {
    expect(
      doOperationService.doOperation([
        { operand: Operand.ADD, value: 9 },
        { operand: Operand.DIVIDE, value: 3 },
      ]),
    ).toEqual(3);
    expect(spyLogger.call).toBe(2);
  });

  test('should throw error when dividing by 0', () => {
    const action = () => {
      doOperationService.doOperation([
        { operand: Operand.ADD, value: 9 },
        { operand: Operand.DIVIDE, value: 0 },
      ]);
    };
    expect(action).toThrowError("Division by ZERO exception");
    expect(spyLogger.call).toBe(2);
  })
});
