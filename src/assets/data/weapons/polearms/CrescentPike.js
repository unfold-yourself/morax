import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const crescentPike = new Weapon({
  displayName: 'Crescent Pike',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/polearms/crescent_pike.png',
});

export {
  crescentPike
};