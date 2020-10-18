import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const xingqiu = new Character({
  displayName: 'Xingqiu',
  rarity: 4,
  talentMaterials: [
    MASTERY.GOLD
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Xingqiu.png',
});

export {
  xingqiu
};