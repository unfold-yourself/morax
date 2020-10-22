import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const lithicBlade = new Weapon({
  displayName: 'Lithic Blade',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.WOLF,
  ],
  iconImageSrc: 'images/weapons/claymores/lithic_blade.png',
});

export {
  lithicBlade
};