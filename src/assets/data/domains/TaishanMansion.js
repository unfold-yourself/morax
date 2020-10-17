import { Domain } from '@/assets/data/domains/_Domain.js';
import { DAY } from '@/assets/data/utils/days.js';
import { GUIDEBOOK } from '@/assets/data/materials/guidebook.js';

const taishanMansion = new Domain({
  name: 'Taishan Mansion',
  rewards: {
    [DAY.MONDAY]: [GUIDEBOOK.PROSPERITY],
    [DAY.TUESDAY]: [GUIDEBOOK.DILIGENCE],
    [DAY.WEDNESDAY]: [GUIDEBOOK.GOLD],
    [DAY.THURSDAY]: [GUIDEBOOK.PROSPERITY],
    [DAY.FRIDAY]: [GUIDEBOOK.DILIGENCE],
    [DAY.SATURDAY]: [GUIDEBOOK.GOLD],
    [DAY.SUNDAY]: [GUIDEBOOK.PROSPERITY, GUIDEBOOK.DILIGENCE, GUIDEBOOK.GOLD],
  }
});

export {
  taishanMansion
};
