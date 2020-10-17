import { Domain, DOMAINTYPE } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';

const midsummerCourtyard = new Domain({
  name: 'Midsummer Courtyard',
  rewards: {
    [DAY.MONDAY]: [],
    [DAY.TUESDAY]: [],
    [DAY.WEDNESDAY]: [],
    [DAY.THURSDAY]: [],
    [DAY.FRIDAY]: [],
    [DAY.SATURDAY]: [],
    [DAY.SUNDAY]: [],
  },
  type: DOMAINTYPE.BLESSING,
});

export {
  midsummerCourtyard,
};
