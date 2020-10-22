import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const otherworldlyStory = new Weapon({
  displayName: 'Otherworldly Story',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GLADIATOR,
  ],
  iconImageSrc: 'images/weapons/catalysts/otherworldly_story.png',
});

export {
  otherworldlyStory
};