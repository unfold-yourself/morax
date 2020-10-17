<template>
  <div class="activity">
    <ActivityCost :cost="cost" />
    <div class="info">
      <h2 class="title">
        {{ name }}
      </h2>
      <ActivityRewards :rewards="allRewards" :today="day"/>
    </div>
    <ActivityUsedFor />
  </div>
</template>

<script>
import ActivityRewards from './ActivityRewards';
import ActivityUsedFor from './ActivityUsedFor';
import ActivityCost from './ActivityCost';

export default {
  name: 'ActivityCard',
  components: {
    ActivityRewards,
    ActivityUsedFor,
    ActivityCost,
  },
  props: {
    'name': String,
    'cost': Number,
    'day': Symbol,
    'allRewards': Array,
  },
}
</script>

<style lang="scss" scoped>
.activity
{
  @include l-card;
  display: flex;
  position: relative;
}

.info
{
  flex-grow: 1;
  margin-right: 60px;
  z-index: 10;
}

.title
{
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}
</style>