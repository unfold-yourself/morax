import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const coolSteel = new Weapon({
  displayName: 'Cool Steel',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.DECARABIAN
  ],
  iconImageSrc: 'images/weapons/swords/cool_steel.png',
});

export {
  coolSteel
};