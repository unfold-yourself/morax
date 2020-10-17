<template>
  <div class="activity">
    <div class="info">
      <h2 class="title">
        {{ name }}
      </h2>
      <div class="content">
        <ActivityRewards :rewards="todayRewards" />
        <ActivityCost :cost="cost" />
      </div>
    </div>
    <ActivityPurposeList v-if="usedForList.length > 0"
                        :usedFor="usedForList" />
    <ActivityPurposeIcons v-if="usedForIcons.length > 0" 
                          :usedFor="usedForIcons" />
  </div>
</template>

<script>
import ActivityRewards from './ActivityRewards';
import ActivityPurposeIcons from './ActivityPurposeIcons';
import ActivityPurposeList from './ActivityPurposeList';
import ActivityCost from './ActivityCost';

export default {
  name: 'ActivityCard',
  components: {
    ActivityRewards,
    ActivityPurposeIcons,
    ActivityPurposeList,
    ActivityCost,
  },
  props: {
    'name': String,
    'cost': Number,
    'day': Symbol,
    'todayRewards': Array,
    'usedForIcons': Array,
    'usedForList': Array,
  },
}
</script>

<style lang="scss" scoped>
.activity
{
  @include l-card;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.info
{
  flex-grow: 1;
  max-width: 50%;
}

.title
{
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}

.content
{
  display: flex;
  justify-content: space-between;
}
</style>