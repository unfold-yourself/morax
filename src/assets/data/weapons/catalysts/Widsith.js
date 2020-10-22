import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const widsith = new Weapon({
  displayName: 'The Widsith',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/widsith.png',
});

export {
  widsith
};