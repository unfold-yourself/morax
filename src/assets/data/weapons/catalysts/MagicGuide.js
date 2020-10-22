import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const magicGuide = new Weapon({
  displayName: 'Magic Guide',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/catalysts/magic_guide.png',
});

export {
  magicGuide
};