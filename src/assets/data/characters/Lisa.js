import { Character } from '@/assets/data/characters/_Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const lisa = new Character({
  displayName: 'Lisa',
  rarity: 4,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Lisa.png',
});

export {
  lisa
};