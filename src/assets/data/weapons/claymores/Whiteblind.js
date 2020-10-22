import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const whiteblind = new Weapon({
  displayName: 'Whiteblind',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/claymores/whiteblind.png',
});

export {
  whiteblind
};