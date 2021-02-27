import arg from 'arg';
import * as _ from 'lodash';
import PARAMETER from './parameter';

export interface IOptions {
  [key: string]: any;
  operationClass: any;
  args: string[];
}

export function parseArgument(rawArgs: string[]): IOptions {
  try {
    const obj: any = Object.create({});
    const result: IOptions = Object.create({});

    PARAMETER.map((param) => {
      obj[param.nameWithDash] = param.type;
      if (param.shortnameWithDash)
        obj[param.shortnameWithDash] = param.nameWithDash;
    });
    const args = arg(obj, {
      argv: rawArgs.slice(2),
      stopAtPositional: true,
    });
    PARAMETER.map((param) => {
      if (args[param.nameWithDash]) {
        result[param.name] = args[param.nameWithDash] || param.defaultValue;
        result.operationClass = param.operationClass;
      }
    });

    // default value if no args
    if (_.isEmpty(result)) {
      const defaultValue = PARAMETER.filter((param) => param.defaultValue);
      result[defaultValue[0].name] = true;
      result.operationClass = defaultValue[0].operationClass;
    }
    return result;
  } catch (err) {
    throw err;
  }
}
