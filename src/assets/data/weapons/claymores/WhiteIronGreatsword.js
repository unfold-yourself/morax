import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const whiteIronGreatsword = new Weapon({
  displayName: 'White Iron Greatsword',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/claymores/white_iron_greatsword.png',
});

export {
  whiteIronGreatsword
};