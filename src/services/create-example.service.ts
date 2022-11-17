import { Example } from '../models/example';

export class CreateExampleService {
  constructor() {}

  public createExample(name: string): Promise<Example> {
    return new Promise((resolve, _) => {
      resolve(new Example(name));
    });
  }
}
