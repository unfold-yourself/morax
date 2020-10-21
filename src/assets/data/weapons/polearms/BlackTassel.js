import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackTassel = new Weapon({
  displayName: 'Black Tassel',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/polearms/black_tassel.png',
});

export {
  blackTassel
};