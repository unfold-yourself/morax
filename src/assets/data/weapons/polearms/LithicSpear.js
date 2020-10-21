import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const lithicSpear = new Weapon({
  displayName: 'Lithic Spear',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/polearms/lithic_spear.png',
});

export {
  lithicSpear
};