import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const ravenBow = new Weapon({
  displayName: 'Raven Bow',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/bows/raven_bow.png',
});

export {
  ravenBow
};