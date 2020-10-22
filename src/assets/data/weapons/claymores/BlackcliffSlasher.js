import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackcliffSlasher = new Weapon({
  displayName: 'Blackcliff Slasher',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/blackcliff_slasher.png',
});

export {
  blackcliffSlasher
};