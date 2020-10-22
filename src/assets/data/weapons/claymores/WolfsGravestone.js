import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const wolfsGravestone = new Weapon({
  displayName: 'Wolf\'s Gravestone',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/claymores/wolfs_gravestone.png',
});

export {
  wolfsGravestone
};