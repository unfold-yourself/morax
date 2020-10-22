import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sacrificialFragments = new Weapon({
  displayName: 'SacrificialFragments',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/catalysts/sacrificial_fragments.png',
});

export {
  sacrificialFragments
};