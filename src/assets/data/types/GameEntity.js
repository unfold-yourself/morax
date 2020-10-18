class GameEntity {
  static entityId = 0;

  static generateId() {
    return this.entityId++;
  }

  constructor(args={}) {
    this.id = GameEntity.generateId();
    ({
      displayName: this.displayName = '',
    } = args);
  }
}

export {
  GameEntity,
}