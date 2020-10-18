import { Character } from '@/assets/data/types/Character.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const bennett = new Character({
  displayName: 'Bennett',
  rarity: 4,
  talentMaterials: [
    MASTERY.RESISTANCE
  ],
  iconImageSrc: 'images/characters/bennett.png',
});

export {
  bennett
};