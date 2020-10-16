class Character {
  static generateId() {
    this.staticId = this.staticId+1 || 0;
    this.staticId += 1;
    return this.staticId;
  }

  constructor(args={}) {
    this.id = this.constructor.generateId();
    ({
      name: this.name = '',
      stars: this.stars = 0,
      talentMaterials: this.talentMaterials = [],
    } = args);
  }
}

export {
  Character
};
