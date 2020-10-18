import { Weapon } from '@/assets/data/weapons/_Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const sacrificialSword = new Weapon({
  displayName: 'Sacrificial Sword',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GLADIATOR
  ],
  iconImageSrc: 'images/weapons/swords/skyward_blade.png',
});

export {
  sacrificialSword
};