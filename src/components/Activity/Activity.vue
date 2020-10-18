<template>
  <ActivityCard v-if="true"
                v-bind="$props"
                :todayRewards="todayRewards"
                :usedForIcons="linkedCharacters"
                :usedForList="linkedWeapons" />
</template>

<script>
import ActivityCard from './ActivityCard.vue';
import { masteryInfo } from '@/assets/data/materials/mastery.js';
import { forgeryInfo } from '@/assets/data/materials/forgery.js';
import { characters } from '@/assets/data/characters';
import { weapons } from '@/assets/data/weapons';

export default {
  name: 'Activity',
  components: {
    ActivityCard,
  },
  props: {
    'displayName': String,
    'rewards': Object,
    'cost': Number,
    'day': Symbol,
    'type': Symbol,
  },
  computed: {
    // Returns a list of rewards for this `Activity` on this `day of the week`
    dayRewards : function() {
      return this.rewards[this.day] || [];
    },
    // Returns a more detailed list of rewards including metadata
    todayRewards: function() {
      return this.dayRewards.map(reward => ({
        symbol: reward,
        ...masteryInfo[reward],
        ...forgeryInfo[reward],
      }));
    },
    // Returns a list of all characters that can use any reward in `dayRewards`
    linkedCharacters: function() {
      return characters.filter(character => {
        return character.talentMaterials
          .some(material => this.dayRewards.indexOf(material) >= 0);
      });
    },
    // Returns a list of all weapons that can use any reward in `dayRewards`
    linkedWeapons: function() {
      return weapons.filter(weapon => {
        return weapon.ascensionMaterials
          .some(material => this.dayRewards.indexOf(material) >= 0);
      });
    },
  },
}
</script>
