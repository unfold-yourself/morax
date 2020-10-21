import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const viridescentHunt = new Weapon({
  displayName: 'The Viridescent Hunt',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/bows/viridescent_hunt.png',
});

export {
  viridescentHunt
};