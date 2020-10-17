import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const diluc = new Character({
  displayName: 'Diluc',
  rarity: 5,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Diluc.png',
});

export {
  diluc
};