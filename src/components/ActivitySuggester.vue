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
                      :day="_day" />
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
import Activity from './Activity/Activity';
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';
import { domains } from '@/assets/data/domains';
import { DOMAINTYPE } from '@/assets/data/domains/_Domain.js';
import { weapons } from '@/assets/data/weapons';
import { characters } from '@/assets/data/characters';
import { instance as ActivitySuggesterInstance } from '@/scripts/ActivitySuggester';

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
    // Returns a list of activites in priority order
    orderedActivities: function() {
      let priorities = [[
        ...characters,
        ...weapons,
      ]];
      let activities = domains.filter(domain => domain.type != DOMAINTYPE.BLESSING);
      let out = ActivitySuggesterInstance.calculate(priorities, activities, this._day);
      return out;
    },
    // Returns a list of Domains of Mastery in priority order
    orderedActivities_mastery: function() {
      let priorities = [[
        ...characters,
        ...weapons,
      ]];
      let activities = domains.filter(domain => domain.type === DOMAINTYPE.MASTERY);
      return ActivitySuggesterInstance.calculate(priorities, activities, this._day);
    },
    // Returns a list of Domains of Forgery in priority order
    orderedActivities_forgery: function() {
      let priorities = [[
        ...characters,
        ...weapons,
      ]];
      let activities = domains.filter(domain => domain.type === DOMAINTYPE.FORGERY);
      return ActivitySuggesterInstance.calculate(priorities, activities, this._day);
    }
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