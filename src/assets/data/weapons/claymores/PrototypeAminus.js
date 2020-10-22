import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const prototypeAminus = new Weapon({
  displayName: 'Prototype Aminus',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/claymores/prototype_aminus.png',
});

export {
  prototypeAminus
};