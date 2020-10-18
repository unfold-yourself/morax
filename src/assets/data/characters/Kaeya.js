import { Character } from '@/assets/data/types/Character.js';
import { MASTERY} from '@/assets/data/materials/mastery.js';

const kaeya = new Character({
  displayName: 'Kaeya',
  rarity: 4,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'images/characters/kaeya.png',
});

export {
  kaeya
};