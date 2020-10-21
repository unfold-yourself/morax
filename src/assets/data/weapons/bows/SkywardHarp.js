import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skywardHarp = new Weapon({
  displayName: 'Skyward Harp',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/bows/skyward_harp.png',
});

export {
  skywardHarp
};