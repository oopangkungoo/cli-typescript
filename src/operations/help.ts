import PARAMETER from './../utils/parameter';
import { OperationBase } from './../utils/operation';
import * as columnify from 'columnify';
export class Help extends OperationBase {
  init() {
    const data: any[] = PARAMETER.map((item) => {
      return {
        name: `${item.shortnameWithDash ? `${item.shortnameWithDash},` : ''} ${
          item.nameWithDash
        }`,
        description: item.description,
      };
    });
    const options: columnify.GlobalOptions = {
      showHeaders: false,
      config: {
        name: {
          minWidth: 30,
        },
        description: {
          maxWidth: 50,
        },
      },
    };
    const helplist = columnify.default(data, options);
    const displayHelp = `${this.productName} ${this.version}\n\n${helplist}`;
    this.logger.info(displayHelp);
  }
}
