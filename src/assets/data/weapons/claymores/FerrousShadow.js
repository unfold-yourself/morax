import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const ferrousShadow = new Weapon({
  displayName: 'Ferrous Shadow',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/claymores/ferrous_shadow.png',
});

export {
  ferrousShadow
};