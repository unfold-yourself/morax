import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sharpshootersOath = new Weapon({
  displayName: 'Sharpshooter\'s Oath',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/bows/sharpshooters_oath.png',
});

export {
  sharpshootersOath
};