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
  padding-top: 12px;
  border-top: 1px solid #222;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.listItem {
  margin: 2px;
  padding: 2px 10px 2px 2px;
  overflow: hidden;
  border-radius: 999px;
  // width: calc(50% - 4px);
  display: flex;
  align-items: center;
  background-color: $entity-border-color;
  position: relative;

  &.is-selected {
    background-color: $entity-highlight-contrast;
  }

  // &.is-selected::after {
  //   display: block;
  // }

  &::after {
    content: '';
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-image: linear-gradient(
                        to right,
                        $entity-highlight-contrast,
                        $entity-highlight-contrast 20%,
                        $entity-border-color);
  }
}

.image {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  z-index: 10;
  background-color: #fff;
}

.label {
  @include Text--small;
  color: #fff;
  flex-grow: 1;
  text-align: center;
  z-index: 10;
}
</style>