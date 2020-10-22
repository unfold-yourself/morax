import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const favoniusGreatsword = new Weapon({
  displayName: 'Favonius Greatsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/claymores/favonius_greatsword.png',
});

export {
  favoniusGreatsword
};