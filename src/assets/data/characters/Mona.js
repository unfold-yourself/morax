import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const mona = new Character({
  displayName: 'Mona',
  rarity: 5,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/mona.png',
});

export {
  mona
};