import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skyriderGreatsword = new Weapon({
  displayName: 'Skyrider Greatsword',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/claymores/skyrider_greatsword.png',
});

export {
  skyriderGreatsword
};