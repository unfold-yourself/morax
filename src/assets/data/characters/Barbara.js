import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const barbara = new Character({
  displayName: 'Barbara',
  rarity: 4,
  talentMaterials: [
    MASTERY.FREEDOM
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Barbara.png',
});

export {
  barbara
};