import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const diluc = new Character({
  displayName: 'Diluc',
  rarity: 5,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/diluc.png',
});

export {
  diluc
};