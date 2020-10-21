import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const primordialJadeWingedSpear = new Weapon({
  displayName: 'Primordial Jade Winged Spear',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/polearms/primordial_jade_winged_spear.png',
});

export {
  primordialJadeWingedSpear
};