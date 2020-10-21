import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const swordOfDescension = new Weapon({
  displayName: 'Sword of Descension',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/swords/sword_of_descension.png',
});

export {
  swordOfDescension
};