import { GameEntity } from '@/assets/data/types/GameEntity.js';

class Character extends GameEntity {
  constructor(args={}) {
    super(args);
    ({
      rarity: this.rarity = 0,
      talentMaterials: this.talentMaterials = [],
      iconImageSrc: this.iconImageSrc = '',
    } = args);
  }
}

export {
  Character
};
