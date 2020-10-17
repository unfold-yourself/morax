import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY} from '@/assets/data/materials/mastery.js';

const kaeya = new Character({
  displayName: 'Kaeya',
  rarity: 4,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Kaeya.png',
});

export {
  kaeya
};