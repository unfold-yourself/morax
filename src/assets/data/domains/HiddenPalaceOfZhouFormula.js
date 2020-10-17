import { Domain, DOMAINTYPE } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';

const hiddenPalaceOfZhouFormula = new Domain({
  name: 'Hidden Palace of Zhou Formula',
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
  hiddenPalaceOfZhouFormula,
};
