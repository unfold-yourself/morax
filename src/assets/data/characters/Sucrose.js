import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const sucrose = new Character({
  displayName: 'Sucrose',
  rarity: 4,
  talentMaterials: [
    MASTERY.FREEDOM
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Sucrose.png',
});

export {
  sucrose
};