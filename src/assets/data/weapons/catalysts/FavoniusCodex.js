import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const favoniusCodex = new Weapon({
  displayName: 'Favonius Codex',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.DECARABIAN,
  ],
  iconImageSrc: 'images/weapons/catalysts/favonius_codex.png',
});

export {
  favoniusCodex
};