import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const keqing = new Character({
  displayName: 'Keqing',
  rarity: 5,
  talentMaterials: [
    MASTERY.PROSPERITY
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Keqing.png',
});

export {
  keqing
};