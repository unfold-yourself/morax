import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const beidou = new Character({
  displayName: 'Beidou',
  rarity: 4,
  talentMaterials: [
    MASTERY.GOLD
  ],
  iconImageSrc: 'images/characters/beidou.png',
});

export {
  beidou
};