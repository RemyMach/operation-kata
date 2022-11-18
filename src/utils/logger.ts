export type LogMethod = {
  (...params: string[]): void;
}
export interface Logger {
  log(entry: string): void;
}

export class OperationLogger implements Logger {

  private logs: string[];
  private logMethod: LogMethod;

  constructor(logMethod: LogMethod, initialLogs: string[] = []) {
    this.logs = initialLogs;
    this.logMethod = logMethod;
  }

  log(entry: string): void {
    this.logs.push(entry);
    this.logMethod(entry);
  }
}

