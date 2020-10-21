import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackcliffLongsword = new Weapon({
  displayName: 'Blackcliff Longsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/blackcliff_longsword.png',
});

export {
  blackcliffLongsword
};