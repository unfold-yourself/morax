import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const noelle = new Character({
  displayName: 'Noelle',
  rarity: 4,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Noelle.png',
});

export {
  noelle
};