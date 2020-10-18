import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const xingqiu = new Character({
  displayName: 'Xingqiu',
  rarity: 4,
  talentMaterials: [
    MASTERY.GOLD
  ],
  iconImageSrc: 'images/characters/xingqiu.png',
});

export {
  xingqiu
};