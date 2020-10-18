import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const xiangling = new Character({
  displayName: 'Xiangling',
  rarity: 4,
  talentMaterials: [
    MASTERY.DILIGENCE
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Xiangling.png',
});

export {
  xiangling
};