import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const chongyun = new Character({
  displayName: 'Chongyun',
  rarity: 4,
  talentMaterials: [
    MASTERY.DILIGENCE
  ],
  iconImageSrc: 'images/characters/chongyun.png',
});

export {
  chongyun
};