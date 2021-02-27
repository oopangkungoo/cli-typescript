import { Version } from './../operations/version';
import { Help } from '../operations/help';

interface IParameter {
  name: string;
  shortnameWithDash?: string;
  nameWithDash: string;
  type: any;
  description: string;
  defaultValue: boolean;
  operationClass: any;
}

const PARAMETER: IParameter[] = [
  {
    name: 'help',
    shortnameWithDash: '-h',
    nameWithDash: '--help',
    type: Boolean,
    description: 'Display help page',
    defaultValue: true,
    operationClass: Help,
  },
  {
    name: 'version',
    shortnameWithDash: '-v',
    nameWithDash: '--version',
    type: Boolean,
    description: 'Display product version',
    defaultValue: true,
    operationClass: Version,
  },
];

export default PARAMETER;
