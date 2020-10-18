import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const blackSword = new Weapon({
  displayName: 'The Black Sword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  blackSword
};