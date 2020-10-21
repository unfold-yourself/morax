import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const royalBow = new Weapon({
  displayName: 'Royal Bow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/bows/royal_bow.png',
});

export {
  royalBow
};