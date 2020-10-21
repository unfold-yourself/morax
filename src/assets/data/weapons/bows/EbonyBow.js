import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const ebonyBow = new Weapon({
  displayName: 'Ebony Bow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/bows/ebony_bow.png',
});

export {
  ebonyBow
};