import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const razor = new Character({
  displayName: 'Razor',
  rarity: 4,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/razor.png',
});

export {
  razor
};