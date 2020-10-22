import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const solarPearl = new Weapon({
  displayName: 'Solar Pearl',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/catalysts/solar_pearl.png',
});

export {
  solarPearl
};