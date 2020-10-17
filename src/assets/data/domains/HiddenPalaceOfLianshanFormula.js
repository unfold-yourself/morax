import { Domain, DOMAINTYPE } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const hiddenPalaceOfLianshanFormula = new Domain({
  name: 'Hidden Palace of Lianshan Formula',
  rewards: {
    [DAY.MONDAY]: [FORGERY.GUYUN],
    [DAY.TUESDAY]: [FORGERY.ELIXIR],
    [DAY.WEDNESDAY]: [FORGERY.AEROSIDERITE],
    [DAY.THURSDAY]: [FORGERY.GUYUN],
    [DAY.FRIDAY]: [FORGERY.ELIXIR],
    [DAY.SATURDAY]: [FORGERY.AEROSIDERITE],
    [DAY.SUNDAY]: [FORGERY.GUYUN, FORGERY.ELIXIR, FORGERY.AEROSIDERITE],
  },
  type: DOMAINTYPE.FORGERY,
  basePriority: 50,
});

export {
  hiddenPalaceOfLianshanFormula,
};
