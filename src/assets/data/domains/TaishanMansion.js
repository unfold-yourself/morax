import { Domain, DOMAINTYPE } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { MASTERY } from '@/assets/data/materials/mastery.js';

const taishanMansion = new Domain({
  name: 'Taishan Mansion',
  rewards: {
    [DAY.MONDAY]: [MASTERY.PROSPERITY],
    [DAY.TUESDAY]: [MASTERY.DILIGENCE],
    [DAY.WEDNESDAY]: [MASTERY.GOLD],
    [DAY.THURSDAY]: [MASTERY.PROSPERITY],
    [DAY.FRIDAY]: [MASTERY.DILIGENCE],
    [DAY.SATURDAY]: [MASTERY.GOLD],
    [DAY.SUNDAY]: [MASTERY.PROSPERITY, MASTERY.DILIGENCE, MASTERY.GOLD],
  },
  type: DOMAINTYPE.MASTERY,
  basePriority: 30,
});

export {
  taishanMansion
};
