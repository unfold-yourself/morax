import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const prototypeGrudge = new Weapon({
  displayName: 'Prototype Grudge',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/polearms/prototype_grudge.png',
});

export {
  prototypeGrudge
};