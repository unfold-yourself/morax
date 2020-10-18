import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const fischl = new Character({
  displayName: 'Fischl',
  rarity: 4,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Fischl.png',
});

export {
  fischl
};