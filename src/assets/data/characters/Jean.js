import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const jean = new Character({
  displayName: 'Jean',
  rarity: 5,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/jean.png',
});

export {
  jean
};