import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackcliffPole = new Weapon({
  displayName: 'Blackcliff Pole',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/polearms/blackcliff_pole.png',
});

export {
  blackcliffPole
};