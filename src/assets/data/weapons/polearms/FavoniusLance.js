import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const favoniusLance = new Weapon({
  displayName: 'Favonius Lance',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/polearms/favonius_lance.png',
});

export {
  favoniusLance
};