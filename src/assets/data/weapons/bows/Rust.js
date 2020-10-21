import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const rust = new Weapon({
  displayName: 'Rust',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.GUYUN,
  ],
  iconImageSrc: 'images/weapons/bows/rust.png',
});

export {
  rust
};