import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const amosBow = new Weapon({
  displayName: 'Amos\' Bow',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.GLADIATOR
  ],
  iconImageSrc: 'images/weapons/bows/amos_bow.png',
});

export {
  amosBow
};