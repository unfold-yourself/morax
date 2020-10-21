import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const dragonsBane = new Weapon({
  displayName: 'Dragon\'s Bane',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/polearms/dragons_bane.png',
});

export {
  dragonsBane
};