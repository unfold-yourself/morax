import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const twinNephrite = new Weapon({
  displayName: 'Twin Nephrite',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/catalysts/twin_nephrite.png',
});

export {
  twinNephrite
};