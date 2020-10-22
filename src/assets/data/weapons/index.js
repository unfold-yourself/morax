import { swords } from '@/assets/data/weapons/swords';
import { bows } from '@/assets/data/weapons/bows';
import { polearms } from '@/assets/data/weapons/polearms';
import { claymores } from '@/assets/data/weapons/claymores';

const weapons = [
  ...swords,
  ...bows,
  ...polearms,
  ...claymores,
];

export {
  weapons,
};