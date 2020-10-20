<template>
  <div class="activityPurpose">
    <ul class="list">
      <li v-for="item in usedFor"
          :key="item.id"
          class="listItem">
        <img :class="item.isSelected ? 'image is-selected' : 'image'"
            :src="require('@/assets/' + item.iconImageSrc)"
            :alt="item.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActivityPurposeIcons",
  props: {
    usedFor: Array,
  },
}
</script>

<style lang="scss" scoped>
.activityPurpose {
  padding-top: 16px;
  border-top: 1px solid $card-divider-color;
}

$icon-size: 68px;

.list {
  display: flex;
  width: calc(#{$icon-size} * 3);
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.listItem {
  width: $icon-size;
  height: $icon-size;
  padding: 4px;
}

.image {
  width: 100%;
  height: 100%;
  background-color: $entity-default-bg;
  border-radius: 6px;
  border: 2px solid $entity-border-color;

  &.is-selected {
    background-color: $entity-highlight-color;
  }
}
</style>