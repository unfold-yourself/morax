<template>
  <div class="activitySuggester">
    <div class="content">
      <div class="masteryActivities">
        <h2 class="heading">
          Domain of Mastery
        </h2>
        <ul class="list">
          <li v-for="activity in orderedActivities_mastery"
              :key="activity.id"
              class="listItem">
            <Activity v-bind="activity"
                      :day="_day"
                      :selectedCharacters="selectedCharacters" />
          </li>
        </ul>
      </div>
      <div class="forgeryActivities">
        <h2 class="heading">
          Domain of Forgery
        </h2>
        <ul class="list">
          <li v-for="activity in orderedActivities_forgery"
              :key="activity.id"
              class="listItem">
            <Activity v-bind="activity"
                      :day="_day" />
          </li>
        </ul>
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
    'orderedActivities_mastery': Array,
    'orderedActivities_forgery': Array,
  },
}
</script>

<style lang="scss" scoped>
.activitySuggester {
  @include l-container;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: auto;

  @include bpgte(md)
  {
    flex-direction: row;
  }

  & > * + * {
    border-left: 1px solid #888;
  }
}

.masteryActivities,
.forgeryActivities {
  flex-grow: 1;
  flex-basis: 50%;
  padding: 0 60px;
}

.heading {
  font-size: 24px;
  padding: 0 8px;
  text-align: center;
  font-weight: 700;
}

.list {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
}

.listItem {
  padding: 8px 0;
  box-sizing: border-box;

  @include bpgte(md)
  {
    padding: 8px;
  }
}
</style>