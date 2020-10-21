import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const slingshot = new Weapon({
  displayName: 'Slingshot',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/bows/slingshot.png',
});

export {
  slingshot
};