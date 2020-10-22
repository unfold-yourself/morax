import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const debateClub = new Weapon({
  displayName: 'Debate Club',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR,
  ],
  iconImageSrc: 'images/weapons/claymores/debate_club.png',
});

export {
  debateClub
};