import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sacrificialGreatsword = new Weapon({
  displayName: 'Sacrificial Greatsword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/sacrificial_greatsword.png',
});

export {
  sacrificialGreatsword
};