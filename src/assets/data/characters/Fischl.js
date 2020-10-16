import { Character } from '@/assets/data/characters/_Character.js';
import { GUIDEBOOK } from '@/assets/data/materials/guidebook.js';

const fischl = new Character({
  name: 'Fischl',
  stars: 4,
  talentMaterials: [
    GUIDEBOOK.BALLAD
  ]
});

export {
  fischl
};