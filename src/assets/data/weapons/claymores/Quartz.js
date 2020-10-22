import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const quartz = new Weapon({
  displayName: 'Quartz',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/quartz.png',
});

export {
  quartz
};