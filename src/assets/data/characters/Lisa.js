import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const lisa = new Character({
  displayName: 'Lisa',
  rarity: 4,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'images/characters/lisa.png',
});

export {
  lisa
};