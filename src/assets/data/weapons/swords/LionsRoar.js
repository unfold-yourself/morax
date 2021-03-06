import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const lionsRoar = new Weapon({
  displayName: 'Lion\'s Roar',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN
  ],
  iconImageSrc: 'images/weapons/swords/lions_roar.png',
});

export {
  lionsRoar
};