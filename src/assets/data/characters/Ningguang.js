import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const ningguang = new Character({
  displayName: 'Ningguang',
  rarity: 4,
  talentMaterials: [
    MASTERY.PROSPERITY
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Ningguang.png',
});

export {
  ningguang
};