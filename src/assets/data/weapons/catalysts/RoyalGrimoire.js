import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const royalGrimoire = new Weapon({
  displayName: 'Royal Grimoire',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/catalysts/royal_grimoire.png',
});

export {
  royalGrimoire
};