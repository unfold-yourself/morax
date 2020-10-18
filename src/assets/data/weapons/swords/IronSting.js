import { Weapon } from '@/assets/data/weapons/_Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const ironSting = new Weapon({
  displayName: 'Iron Sting',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  ironSting
};