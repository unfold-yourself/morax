<template>
  <ActivitySuggesterLayout v-bind="$props"
                           :orderedActivities_mastery="orderedActivities_mastery"
                           :orderedActivities_forgery="orderedActivities_forgery" />
</template>

<script>
import ActivitySuggesterLayout from './ActivitySuggesterLayout.vue';
import { domains } from '@/assets/data/domains';
import { DOMAINTYPE } from '@/assets/data/types/Domain.js';
import { weapons } from '@/assets/data/weapons';
import { instance as ActivitySuggesterInstance } from '@/scripts/ActivitySuggester';

export default {
  name: 'ActivitySuggester',
  components: {
    ActivitySuggesterLayout,
  },
  props: {
    '_day': Symbol,
    'selectedCharacters': Array,
  },
  computed: {
    // Returns a list of Domains of Mastery in priority order
    orderedActivities_mastery: function() {
      let priorities = [[
        ...this.selectedCharacters,
      ]];
      let activities = domains.filter(domain => domain.type === DOMAINTYPE.MASTERY);
      return ActivitySuggesterInstance.calculate(priorities, activities, this._day);
    },
    // Returns a list of Domains of Forgery in priority order
    orderedActivities_forgery: function() {
      let priorities = [[
        ...weapons,
      ]];
      let activities = domains.filter(domain => domain.type === DOMAINTYPE.FORGERY);
      return ActivitySuggesterInstance.calculate(priorities, activities, this._day);
    }
  },
}
</script>
