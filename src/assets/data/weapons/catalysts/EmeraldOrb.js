import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const emeraldOrb = new Weapon({
  displayName: 'Emerald Orb',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/catalysts/emerald_orb.png',
});

export {
  emeraldOrb
};