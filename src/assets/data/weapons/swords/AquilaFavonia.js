import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const aquilaFavonia = new Weapon({
  displayName: 'Aquila Favonia',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/aquila_favonia.png',
});

export {
  aquilaFavonia
};