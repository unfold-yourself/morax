import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skywardPride = new Weapon({
  displayName: 'Skyward Pride',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/skyward_pride.png',
});

export {
  skywardPride
};