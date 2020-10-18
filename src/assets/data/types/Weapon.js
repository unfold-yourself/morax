import { GameEntity } from '@/assets/data/types/GameEntity.js';

class Weapon extends GameEntity {
  constructor(args={}) {
    super(args);
    ({
      rarity: this.rarity = 0,
      ascensionMaterials: this.ascensionMaterials = [],
      iconImageSrc: this.iconImageSrc = '',
    } = args);
  }
}

export {
  Weapon,
}