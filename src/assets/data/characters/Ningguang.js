import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const ningguang = new Character({
  displayName: 'Ningguang',
  rarity: 4,
  talentMaterials: [
    MASTERY.PROSPERITY
  ],
  iconImageSrc: 'images/characters/ningguang.png',
});

export {
  ningguang
};