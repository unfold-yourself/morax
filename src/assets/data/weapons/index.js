import { bows } from '@/assets/data/weapons/bows';
import { catalysts } from '@/assets/data/weapons/catalysts';
import { claymores } from '@/assets/data/weapons/claymores';
import { polearms } from '@/assets/data/weapons/polearms';
import { swords } from '@/assets/data/weapons/swords';



const weapons = [
  ...bows,
  ...catalysts,
  ...claymores,
  ...polearms,
  ...swords,
];

export {
  weapons,
};