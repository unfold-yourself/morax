import { DAY } from '@/assets/data/utils/days.js';
import { GameEntity } from '@/assets/data/types/GameEntity.js';

class Domain extends GameEntity {
  constructor(args={}) {
    super(args);
    ({
      rewards: this.rewards = {
        [DAY.MONDAY]: [],
        [DAY.TUESDAY]: [],
        [DAY.WEDNESDAY]: [],
        [DAY.THURSDAY]: [],
        [DAY.FRIDAY]: [],
        [DAY.SATURDAY]: [],
        [DAY.SUNDAY]: [],
      },
      cost: this.cost = 20,
      type: this.type = null,
      basePriority: this.basePriority = 0, // scripts/ActivitySuggester/index.js for documentation of priority values
    } = args);
  }
}

const DOMAINTYPE = Object.freeze({
  BLESSING: Symbol('blessing'),
  FORGERY: Symbol('forgery'),
  MASTERY: Symbol('mastery'),
});

export {
  Domain,
  DOMAINTYPE,
};
