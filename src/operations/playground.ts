import { OperationBase } from './../utils/operation';
import * as inquirer from 'inquirer';
export class PlayGround extends OperationBase {
  async init() {
    const quitions = [
      {
        message: '👤 Name',
        name: 'name',
      },
      {
        message: '🥩 Food',
        name: 'food',
      },
      {
        message: '🍺 Drink',
        name: 'drink',
      },
    ];
    const { name, food, drink } = await inquirer.prompt(quitions);
    this.logger.info('=====Result=====');
    this.logger.info(`👤 Name: ${name}`);
    this.logger.info(`🥩 Food: ${food}`);
    this.logger.info(`🍺 Drink: ${drink}`);
  }
}
