<template>
  <div class="activityRewards">
    <ul class="rewardsList">
      <li v-for="reward in rewards"
          :class="['reward', reward.isToday ? 'is-today' : '']"
          :key="reward.displayName">
        <img class="rewardIcon"
             :src="require('@/assets/' + reward.imageSrc)"
             :alt="reward.displayName" />
        <span class="rewardLabel">
          {{ reward.displayName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActivityRewards",
  props: {
    'rewards': Array,
    'today': Symbol,
  },
}
</script>

<style lang="scss" scoped>
.reward {
  display: flex;
  align-items: center;
  display: none;

  &.is-today
  {
    display: flex;
  }
}

.rewardIcon {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}
</style>