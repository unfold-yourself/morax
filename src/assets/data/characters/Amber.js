import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const amber = new Character({
  displayName: 'Amber',
  rarity: 4,
  talentMaterials: [
    MASTERY.FREEDOM
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Amber.png',
});

export {
  amber
};