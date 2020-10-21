import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const compoundBow = new Weapon({
  displayName: 'Compound Bow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/bows/compound_bow.png',
});

export {
  compoundBow
};