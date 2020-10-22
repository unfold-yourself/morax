import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const mappaMare = new Weapon({
  displayName: 'Mappa Mare',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.AEROSIDERITE,
  ],
  iconImageSrc: 'images/weapons/catalysts/mappa_mare.png',
});

export {
  mappaMare
};