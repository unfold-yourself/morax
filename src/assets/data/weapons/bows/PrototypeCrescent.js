import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const prototypeCrescent = new Weapon({
  displayName: 'Prototype Crescent',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/bows/prototype_crescent.png',
});

export {
  prototypeCrescent
};