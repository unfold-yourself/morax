import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const mona = new Character({
  displayName: 'Mona',
  rarity: 5,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Mona.png',
});

export {
  mona
};