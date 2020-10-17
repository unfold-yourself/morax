<template>
  <ul class="activityPurpose">
    <li v-for="item in usedFor"
        :key="item.id"
        class="listItem">
      <img class="image"
           :src="require('@/assets/' + item.iconImageSrc)"
           :alt="item.displayName" />
      <span class="label">
        {{ item.displayName }}
      </span>
    </li>
  </ul>
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
  margin: -8px 0;
}

.listItem {
  margin: 8px 0;
  padding: 4px;
  border-radius: 999px;
  width: 200px;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  background-color: #444;
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
}
</style>