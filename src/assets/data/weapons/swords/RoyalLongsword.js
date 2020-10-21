import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const royalLongsword = new Weapon({
  displayName: 'Royal Longsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/royal_longsword.png',
});

export {
  royalLongsword
};