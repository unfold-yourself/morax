import { DAY } from '@/assets/data/utils/utils.js';

class Domain {
  static generateId() {
    this.staticId = this.staticId+1 || 0;
    return this.staticId;
  }

  constructor(args={}) {
    this.id = this.constructor.generateId();
    ({
      name: this.name = '',
      rewards: this.rewards = {
        [DAY.MONDAY]: [],
        [DAY.TUESDAY]: [],
        [DAY.WEDNESDAY]: [],
        [DAY.THURSDAY]: [],
        [DAY.FRIDAY]: [],
        [DAY.SATURDAY]: [],
        [DAY.SUNDAY]: [],
      }
    } = args);
  }
}

export {
  Domain
};
