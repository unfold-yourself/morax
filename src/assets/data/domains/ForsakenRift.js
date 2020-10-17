import { Domain } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { GUIDEBOOK } from '@/assets/data/materials/guidebook.js';

const forsakenRift = new Domain({
  name: 'Hidden Palace of Lianshan Formula',
  rewards: {
    [DAY.MONDAY]: [GUIDEBOOK.FREEDOM],
    [DAY.TUESDAY]: [GUIDEBOOK.RESISTANCE],
    [DAY.WEDNESDAY]: [GUIDEBOOK.BALLAD],
    [DAY.THURSDAY]: [GUIDEBOOK.FREEDOM],
    [DAY.FRIDAY]: [GUIDEBOOK.RESISTANCE],
    [DAY.SATURDAY]: [GUIDEBOOK.BALLAD],
    [DAY.SUNDAY]: [GUIDEBOOK.FREEDOM, GUIDEBOOK.RESISTANCE, GUIDEBOOK.BALLAD],
  }
});

export {
  forsakenRift
};
