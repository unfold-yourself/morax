import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const noelle = new Character({
  displayName: 'Noelle',
  rarity: 4,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/noelle.png',
});

export {
  noelle
};