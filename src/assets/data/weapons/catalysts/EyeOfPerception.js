import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const eyeOfPerception = new Weapon({
  displayName: 'Eye of Perception',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/catalysts/eye_of_perception.png',
});

export {
  eyeOfPerception
};