import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const klee = new Character({
  displayName: 'Klee',
  rarity: 5,
  talentMaterials: [
    MASTERY.FREEDOM
  ],
  iconImageSrc: 'images/characters/klee.png',
});

export {
  klee
};