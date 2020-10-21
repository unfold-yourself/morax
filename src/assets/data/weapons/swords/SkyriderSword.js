import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skyriderSword = new Weapon({
  displayName: 'Skyrider Sword',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE
  ],
  iconImageSrc: 'images/weapons/swords/skyrider_sword.png',
});

export {
  skyriderSword
};