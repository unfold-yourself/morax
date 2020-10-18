import { Character } from '@/assets/data/types/Character.js';
import { MASTERY} from '@/assets/data/materials/mastery.js';

const qiqi = new Character({
  displayName: 'Qiqi',
  rarity: 5,
  talentMaterials: [
    MASTERY.PROSPERITY
  ],
  iconImageSrc: 'images/characters/qiqi.png',
});

export {
  qiqi
};