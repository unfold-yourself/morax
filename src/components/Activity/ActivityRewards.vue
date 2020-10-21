<template>
  <div class="activityRewards">
    <ul class="rewardsList">
      <li v-for="reward in rewards"
          class="reward"
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
  },
}
</script>

<style lang="scss" scoped>
.reward {
  display: flex;
  align-items: center;
  padding: 4px 0;
}

.rewardsList {
  margin: 8px 12px;
}

.rewardIcon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.rewardLabel {
  @include Text--medium;
}
</style>