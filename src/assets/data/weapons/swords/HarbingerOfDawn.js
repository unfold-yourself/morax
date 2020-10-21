import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const harbingerOfDawn = new Weapon({
  displayName: 'Harbinger of Dawn',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.WOLF
  ],
  iconImageSrc: 'images/weapons/swords/harbinger_of_dawn.png',
});

export {
  harbingerOfDawn
};