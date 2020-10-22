import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const wineAndSong = new Weapon({
  displayName: 'Wine and Song',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/wine_and_song.png',
});

export {
  wineAndSong
};