import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const prototypeMalice = new Weapon({
  displayName: 'Prototype Malice',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/catalysts/prototype_malice.png',
});

export {
  prototypeMalice
};