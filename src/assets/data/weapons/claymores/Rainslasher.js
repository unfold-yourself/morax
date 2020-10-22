import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const rainslasher = new Weapon({
  displayName: 'Rainslasher',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/claymores/rainslasher.png',
});

export {
  rainslasher
};