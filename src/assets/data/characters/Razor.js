import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const razor = new Character({
  displayName: 'Razor',
  rarity: 4,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Razor.png',
});

export {
  razor
};