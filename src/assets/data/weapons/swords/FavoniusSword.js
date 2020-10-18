import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const favoniusSword = new Weapon({
  displayName: 'Favonius Sword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  favoniusSword
};