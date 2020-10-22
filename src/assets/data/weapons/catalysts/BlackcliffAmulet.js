import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackcliffAmulet = new Weapon({
  displayName: 'Blackcliff Amulet',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/blackcliff_amulet.png',
});

export {
  blackcliffAmulet
};