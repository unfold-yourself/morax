import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const recurveBow = new Weapon({
  displayName: 'Recurve Bow',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/bows/recurve_bow.png',
});

export {
  recurveBow
};