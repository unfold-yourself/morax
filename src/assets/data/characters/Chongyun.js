import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const chongyun = new Character({
  displayName: 'Chongyun',
  rarity: 4,
  talentMaterials: [
    MASTERY.DILIGENCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Chongyun.png',
});

export {
  chongyun
};