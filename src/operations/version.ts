import { OperationBase } from './../utils/operation';
export class Version extends OperationBase {
    init() {
        this.logger.info(`Version: ${this.version}`);
    }
}
