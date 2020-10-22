import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const serpentSpine = new Weapon({
  displayName: 'Serpent Spine',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/claymores/serpent_spine.png',
});

export {
  serpentSpine
};