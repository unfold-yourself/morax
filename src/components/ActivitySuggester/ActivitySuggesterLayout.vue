<template>
  <div class="activitySuggester">
    <div class="container">
      <div class="content">
        <div class="masteryActivities">
          <ul class="list">
            <li v-for="activity in orderedActivities_mastery"
                :key="activity.id"
                class="listItem">
              <Activity v-bind="activity"
                        :day="_day"
                        :selectedCharacters="selectedCharacters"
                        :key="_day" />
            </li>
          </ul>
        </div>
        <div class="forgeryActivities">
          <ul class="list">
            <li v-for="activity in orderedActivities_forgery"
                :key="activity.id"
                class="listItem">
              <Activity v-bind="activity"
                        :day="_day"
                        :selectedWeapons="selectedWeapons"
                        :key="_day" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Activity from '@/components/Activity/Activity';

export default {
  name: 'ActivitySuggesterLayout',
  components: {
    Activity,
  },
  props: {
    '_day': Symbol,
    'selectedCharacters': Array,
    'selectedWeapons': Array,
    'orderedActivities_mastery': Array,
    'orderedActivities_forgery': Array,
  },
}
</script>

<style lang="scss" scoped>
.activitySuggester {
  background-color: $base-bg-color;
}

.content {
  @include l-2-cols;
  padding: 32px 0;
  min-height: 80vh;
}

.list {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
}

.listItem {
  padding: 8px 0;

  @include bpgte(md)
  {
    padding: 8px;
  }
}
</style>