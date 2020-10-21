import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const deathmatch = new Weapon({
  displayName: 'Deathmatch',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/polearms/deathmatch.png',
});

export {
  deathmatch
};