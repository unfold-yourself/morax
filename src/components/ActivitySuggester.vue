<template>
  <div class="activitySuggester">
    <div class="content">
      Suggest Activities here for {{ day }}
      <Activity v-for="activity in orderedActivities"
                v-bind="activity"
                :key="activity.id"
                :day="_day" />
    </div>
  </div>
</template>

<script>
import Activity from './Activity/Activity';
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';
import { domains } from '@/assets/data/domains';

export default {
  name: 'ActivitySuggester',
  components: {
    Activity,
  },
  props: {
    '_day': Symbol
  },
  computed: {
    day: function() {
      return dayOfWeekInfo.find(day => day.symbol === this._day).displayName
    },
    // TODO: add things other than domains (ley lines, ?)
    // TODO: add algorithm to prioritize domains once character/item selection works
    orderedActivities: function() {
      return domains
    }
  }
}
</script>

<style lang="scss" scoped>
.activitySuggester {
  @include l-container;
}

.content {
  padding: 16px 0;
}
</style>