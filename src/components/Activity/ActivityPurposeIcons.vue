<template>
  <ul class="activityPurpose">
    <li v-for="item in usedFor"
        :key="item.id"
        class="listItem">
      <img class="image"
           :src="item.iconImageSrc"
           :alt="item.name" />
    </li>
  </ul>
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
  display: flex;
  width: calc(68px * 3);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.image {
  width: 60px;
  height: 60px;
  margin: 4px;
  background-color: paleturquoise;
}
</style>