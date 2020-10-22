import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const bell = new Weapon({
  displayName: 'The Bell',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/claymores/bell.png',
});

export {
  bell
};