import { ObjDi } from './utils/inversify.config';
import { IOptions, parseArgument } from './utils/options';

try {
  const options: IOptions = parseArgument(process.argv);
  Reflect.construct(options.operationClass, [ObjDi, options.args]);
} catch (err) {
  console.error(err);
}
