import { DoOperationService } from './do-operation.service';
describe('test do operation use case', () => {
  let doOperationService: DoOperationService;
  beforeEach(() => {
    doOperationService = new DoOperationService();
  });

  test('should render one when we add 1', async () => {
    expect(
      doOperationService.doOperation([{ operand: 'add', value: 1 }]),
    ).toEqual(1);
  });

  test('should render two when we add 1 and 1', async () => {
    expect(
      doOperationService.doOperation([
        { operand: 'add', value: 1 },
        { operand: 'add', value: 1 },
      ]),
    ).toEqual(2);
  });

  test('should render 1 when we add 2 and subtract 1', async () => {
    expect(
      doOperationService.doOperation([
        { operand: 'add', value: 2 },
        { operand: 'subtract', value: 1 },
      ]),
    ).toEqual(1);
  });

  test('should render 0 when we multiply 0 by 2', async () => {
    expect(
      doOperationService.doOperation([{ operand: 'multiply', value: 2 }]),
    ).toEqual(0);
  });

  test('should render 2 when we multiply 1 by 2', async () => {
    expect(
      doOperationService.doOperation([
        { operand: 'add', value: 1 },
        { operand: 'multiply', value: 2 },
      ]),
    ).toEqual(2);
  });

  test('should render 3 when we devide 9 by 3', async () => {
    expect(
      doOperationService.doOperation([
        { operand: 'add', value: 9 },
        { operand: 'divide', value: 3 },
      ]),
    ).toEqual(3);
  });
});
