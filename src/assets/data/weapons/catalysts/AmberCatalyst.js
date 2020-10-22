import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const amberCatalyst = new Weapon({
  displayName: 'Amber Catalyst',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/amber_catalyst.png',
});

export {
  amberCatalyst
};