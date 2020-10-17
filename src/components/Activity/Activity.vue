<template>
  <ActivityCard v-bind="$props" :allRewards="allRewards" />
</template>

<script>
import ActivityCard from './ActivityCard';
import { guidebookInfo } from '@/assets/data/materials/guidebook.js';

export default {
  name: 'Activity',
  components: {
    ActivityCard,
  },
  props: {
    'name': String,
    'rewards': Object,
    'cost': Number,
    "day": Symbol,
  },
  computed: {
    allRewards: function() {
      return Reflect.ownKeys(this.rewards).reduce((allRewards, day) => {
        const dayRewards = this.rewards[day];
        dayRewards && dayRewards.forEach(reward => {
          // if already in allRewards, update `isToday` if it matches today
          const thisRewardIdx = allRewards.findIndex(el => el.symbol === reward);
          if (thisRewardIdx >= 0) {
            if (!allRewards[thisRewardIdx].isToday) {
              allRewards[thisRewardIdx].isToday = day === this.day;
            }
          // Otherwise, add this reward to `allRewards`
          } else {
            allRewards.push({
              symbol: reward,
              isToday: false,
              ...guidebookInfo[reward],
            });
          }
        });
        return allRewards;
      }, []);
    }
  },
}
</script>
