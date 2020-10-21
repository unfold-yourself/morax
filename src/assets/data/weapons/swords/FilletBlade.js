import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const filletBlade = new Weapon({
  displayName: 'Fillet Blade',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.ELIXIR
  ],
  iconImageSrc: 'images/weapons/swords/fillet_blade.png',
});

export {
  filletBlade
};