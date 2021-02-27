import type { ILogger } from '../injections/logger';
import type { IObjDi } from './inversify.config';
const packageJson = require('../../package.json');
export class OperationBase {
  private _logger: ILogger;
  constructor(objDi: IObjDi) {
    this._logger = objDi.logger;
    this.init();
  }

  init() {
    this.logger.info('init base');
  }

  get logger(): ILogger {
    return this._logger;
  }

  get version(): string {
    return packageJson.version;
  }
  get productName(): string {
    return packageJson.name;
  }
}
