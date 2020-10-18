import { Domain, DOMAINTYPE } from '@/assets/data/types/Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const ceciliaGarden = new Domain({
  displayName: 'Cecilia Garden',
  rewards: {
    [DAY.MONDAY]: [FORGERY.DECARABIAN],
    [DAY.TUESDAY]: [FORGERY.WOLF],
    [DAY.WEDNESDAY]: [FORGERY.GLADIATOR],
    [DAY.THURSDAY]: [FORGERY.DECARABIAN],
    [DAY.FRIDAY]: [FORGERY.WOLF],
    [DAY.SATURDAY]: [FORGERY.GLADIATOR],
    [DAY.SUNDAY]: [FORGERY.DECARABIAN, FORGERY.WOLF, FORGERY.GLADIATOR],
  },
  type: DOMAINTYPE.FORGERY,
  basePriority: 50,
});

export {
  ceciliaGarden,
};
