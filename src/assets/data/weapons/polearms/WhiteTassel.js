import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const whiteTassel = new Weapon({
  displayName: 'White Tassel',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/polearms/white_tassel.png',
});

export {
  whiteTassel
};