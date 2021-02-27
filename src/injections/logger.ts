import { injectable } from 'inversify';

export interface ILogger {
  info(message: string): void;
  error(message: string): void;
}

@injectable()
export class Logger implements ILogger {
  public info(message: string): void {
    // tslint:disable-next-line: no-console
    console.log(message);
  }
  public error(message: string): void {
    console.error(message);
  }
}
