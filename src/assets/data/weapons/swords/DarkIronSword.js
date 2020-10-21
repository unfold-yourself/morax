import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const darkIronSword = new Weapon({
  displayName: 'Dark Iron Sword',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GUYUN
  ],
  iconImageSrc: 'images/weapons/swords/dark_iron_sword.png',
});

export {
  darkIronSword
};