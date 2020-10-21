import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const kunwusIrisRift = new Weapon({
  displayName: 'Kunwu\'s Iris Rift',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/polearms/kunwus_iris_rift.png',
});

export {
  kunwusIrisRift
};