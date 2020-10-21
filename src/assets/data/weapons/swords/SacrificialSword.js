import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sacrificialSword = new Weapon({
  displayName: 'Sacrificial Sword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR
  ],
  iconImageSrc: 'images/weapons/swords/sacrificial_sword.png',
});

export {
  sacrificialSword
};