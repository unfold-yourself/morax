class Weapon {
  static generateId() {
    this.staticId = this.staticId+1 || 0;
    this.staticId += 1;
    return this.staticId;
  }

  constructor(args={}) {
    this.id = this.constructor.generateId();
    ({
      displayName: this.displayName = '',
      rarity: this.rarity = 0,
      ascensionMaterials: this.ascensionMaterials = [],
      iconImageSrc: this.iconImageSrc = '',
    } = args);
  }
}

export {
  Weapon,
}