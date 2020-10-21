import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const messenger = new Weapon({
  displayName: 'Messenger',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/bows/messenger.png',
});

export {
  messenger
};