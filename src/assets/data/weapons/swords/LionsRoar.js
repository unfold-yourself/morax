import { Weapon } from '@/assets/data/weapons/_Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const lionsRoar = new Weapon({
  displayName: 'Lion\'s Roar',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  lionsRoar
};