import { PlayGround } from './../operations/playground';
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
    defaultValue: false,
    operationClass: Help,
  },
  {
    name: 'version',
    shortnameWithDash: '-v',
    nameWithDash: '--version',
    type: Boolean,
    description: 'Display product version',
    defaultValue: false,
    operationClass: Version,
  },
  {
    name: 'playground',
    shortnameWithDash: '--pg',
    nameWithDash: '--playground',
    type: Boolean,
    description: 'cli playground',
    defaultValue: true,
    operationClass: PlayGround,
  },
];

export default PARAMETER;
