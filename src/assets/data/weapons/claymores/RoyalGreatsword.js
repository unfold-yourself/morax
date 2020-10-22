import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const royalGreatsword = new Weapon({
  displayName: 'Royal Greatsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/claymores/royal_greatsword.png',
});

export {
  royalGreatsword
};