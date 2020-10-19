<template>
  <div class="activityPurpose">
    <ul class="list">
      <li v-for="item in usedFor"
          :key="item.id"
          :class="item.isSelected ? 'listItem is-selected' : 'listItem'">
        <img class="image"
            :src="require('@/assets/' + item.iconImageSrc)"
            :alt="item.displayName" />
        <span class="label">
          {{ item.displayName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ActivityPurposeList',
  props: {
    usedFor: Array,
  },
}
</script>

<style lang="scss" scoped>
.activityPurpose {
  padding-top: 16px;
  border-top: 1px solid #222;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.listItem {
  margin: 2px;
  padding: 2px;
  border-radius: 999px;
  width: calc(50% - 4px);
  border: 2px solid #222;
  display: flex;
  align-items: center;
  background-color: #444;

  &.is-selected {
    border-color: cornflowerblue;
  }
}

.image {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  background-color: #fff;
}

.label {
  color: #fff;
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
}
</style>