<template>
  <div class="activityCost">
    {{ cost }}
  </div>
</template>

<script>
export default {
  name: "ActivityCost",
  props: {
    'cost': Number,
  }
}
</script>

<style lang="scss" scoped>
.activityCost {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: #000b;
  border-radius: 999px;
  padding: 8px 12px;
  color: #fff;

  &::before
  {
    content: '';
    background-image: url('../../assets/images/materials/guidebook_prosperity.png');
    background-size: contain;
    background-position: center center;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
}
</style>