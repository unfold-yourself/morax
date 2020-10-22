import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const thrillingTalesOfDragonSlayers = new Weapon({
  displayName: 'Thrilling Tales of Dragon Slayers',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/catalysts/thrilling_tales_of_dragon_slayers.png',
});

export {
  thrillingTalesOfDragonSlayers
};