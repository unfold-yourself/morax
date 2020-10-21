import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackcliffWarbow = new Weapon({
  displayName: 'Blackcliff Warbow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/bows/blackcliff_warbow.png',
});

export {
  blackcliffWarbow
};