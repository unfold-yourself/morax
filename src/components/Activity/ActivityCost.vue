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
  display: flex;
  align-items: center;

  &::before
  {
    content: '';
    background-image: url('../../assets/images/materials/mastery/guide_to_prosperity.png'); // TODO: replace with resin png
    background-size: contain;
    background-position: center center;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
}
</style>