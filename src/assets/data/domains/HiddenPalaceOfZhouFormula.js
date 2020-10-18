import { Domain, DOMAINTYPE } from '@/assets/data/types/Domain.js';
import { DAY } from '@/assets/data/utils/days.js';

const hiddenPalaceOfZhouFormula = new Domain({
  displayName: 'Hidden Palace of Zhou Formula',
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
