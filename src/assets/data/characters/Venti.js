import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const venti = new Character({
  displayName: 'Venti',
  rarity: 5,
  talentMaterials: [
    MASTERY.BALLAD
  ],
  iconImageSrc: 'https://rerollcdn.com/GENSHIN/Characters/Venti.png',
});

export {
  venti
};