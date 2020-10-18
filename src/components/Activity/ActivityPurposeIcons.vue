<template>
  <div class="activityPurpose">
    <ul class="list">
      <li v-for="item in usedFor"
          :key="item.id"
          class="listItem">
        <img class="image"
            :src="item.iconImageSrc"
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
  border-top: 1px solid #222;
}

.list {
  display: flex;
  width: calc(68px * 3);
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.listItem {
  width: 68px;
  height: 68px;
}

.image {
  width: 60px;
  height: 60px;
  margin: 4px;
  background-color: paleturquoise;
}
</style>