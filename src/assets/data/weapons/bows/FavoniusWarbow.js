import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const favoniusWarbow = new Weapon({
  displayName: 'Favonius Warbow',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/bows/favonius_warbow.png',
});

export {
  favoniusWarbow
};