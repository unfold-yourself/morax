import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sacrificialBow = new Weapon({
  displayName: 'Sacrificial Bow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/bows/sacrificial_bow.png',
});

export {
  sacrificialBow
};