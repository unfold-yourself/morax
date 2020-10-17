import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY} from '@/assets/data/materials/mastery.js';

const qiqi = new Character({
  displayName: 'Qiqi',
  rarity: 5,
  talentMaterials: [
    MASTERY.PROSPERITY
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Qiqi.png',
});

export {
  qiqi
};