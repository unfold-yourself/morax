import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const lostPrayerToTheSacredWinds = new Weapon({
  displayName: 'Lost Prayer to the Sacred Winds',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/catalysts/lost_prayer_to_the_sacred_winds.png',
});

export {
  lostPrayerToTheSacredWinds
};