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
  top: 18px;
  right: 8px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: #0006;

  &::before
  {
    content: '';
    background-image: url('../../assets/images/resin.png');
    background-size: contain;
    background-position: center center;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
}
</style>