import { Domain, DOMAINTYPE } from '@/assets/data/types/Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const forsakenRift = new Domain({
  displayName: 'Forsaken Rift',
  rewards: {
    [DAY.MONDAY]: [MASTERY.FREEDOM],
    [DAY.TUESDAY]: [MASTERY.RESISTANCE],
    [DAY.WEDNESDAY]: [MASTERY.BALLAD],
    [DAY.THURSDAY]: [MASTERY.FREEDOM],
    [DAY.FRIDAY]: [MASTERY.RESISTANCE],
    [DAY.SATURDAY]: [MASTERY.BALLAD],
    [DAY.SUNDAY]: [MASTERY.FREEDOM, MASTERY.RESISTANCE, MASTERY.BALLAD],
  },
  type: DOMAINTYPE.MASTERY,
  basePriority: 30,
});

export {
  forsakenRift
};
