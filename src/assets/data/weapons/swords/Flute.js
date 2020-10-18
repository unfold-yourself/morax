import { Weapon } from '@/assets/data/weapons/_Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const flute = new Weapon({
  displayName: 'The Flute',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  flute
};