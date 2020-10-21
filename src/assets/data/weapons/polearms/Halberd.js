import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const halberd = new Weapon({
  displayName: 'Halberd',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/polearms/halberd.png',
});

export {
  halberd
};