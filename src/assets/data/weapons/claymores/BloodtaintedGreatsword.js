import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const bloodtaintedGreatsword = new Weapon({
  displayName: 'Bloodtainted Greatsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/bloodtainted_greatsword.png',
});

export {
  bloodtaintedGreatsword
};