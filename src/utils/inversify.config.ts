import 'reflect-metadata';
import { Logger} from '../injections/logger';
import { Container } from 'inversify';
export interface IObjDi {
  logger: Logger;
}

const TYPES = {
  logger: Symbol('Logs'),
};

const container = new Container();

container.bind<Logger>(TYPES.logger).to(Logger).inSingletonScope();

export const ObjDi: IObjDi = {
  logger: container.get<Logger>(TYPES.logger),
};

export default container;
