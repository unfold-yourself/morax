import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const alleyHunter = new Weapon({
  displayName: 'The Alley Hunter',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/bows/alley_hunter.png',
});

export {
  alleyHunter
};