import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const barbara = new Character({
  displayName: 'Barbara',
  rarity: 4,
  talentMaterials: [
    MASTERY.FREEDOM
  ],
  iconImageSrc: 'images/characters/barbara.png',
});

export {
  barbara
};