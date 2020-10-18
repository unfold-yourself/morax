import { Weapon } from '@/assets/data/weapons/_Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skywardBlade = new Weapon({
  displayName: 'Skyward Blade',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  skywardBlade
};