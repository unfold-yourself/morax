import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skywardAtlas = new Weapon({
  displayName: 'Skyward Atlas',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/skyward_atlas.png',
});

export {
  skywardAtlas
};