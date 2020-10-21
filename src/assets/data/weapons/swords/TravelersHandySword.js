import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const travellersHandySword = new Weapon({
  displayName: 'Traveller\'s Handy Sword',
  rarity: 3,
  ascensionMaterials: [
    FORGERY.GLADIATOR
  ],
  iconImageSrc: 'images/weapons/swords/travellers_handy_sword.png',
});

export {
  travellersHandySword
};