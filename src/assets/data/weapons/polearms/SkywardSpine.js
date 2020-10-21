import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const skywardSpine = new Weapon({
  displayName: 'Skyward Spine',
  rarity: 5,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/polearms/skyward_spine.png',
});

export {
  skywardSpine
};