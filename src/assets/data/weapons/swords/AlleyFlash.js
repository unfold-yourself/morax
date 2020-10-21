import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const alleyFlash = new Weapon({
  displayName: 'The Alley Flash',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/alley_flash.png',
});

export {
  alleyFlash
};