import { Character } from '@/assets/data/characters/_Character.js';
import { GUIDEBOOK } from '@/assets/data/materials/guidebook.js';

const keqing = new Character({
  name: 'KeQing',
  stars: 5,
  talentMaterials: [
    GUIDEBOOK.PROSPERITY
  ]
});

export {
  keqing
};