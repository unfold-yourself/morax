<template>
  <div class="teamPicker">
    <IconPicker :label="characterPickerLabel"
                :options="characterOptions"
                v-on="$listeners"/>
  </div>
</template>

<script>
import IconPicker from './IconPicker.vue';

export default {
  name: 'TeamPickerLayout',
  components: {
    IconPicker,
  },
  props: {
    'characterPickerLabel': String,
    'characterOptions': Array,
  },
}
</script>

<style lang="scss" scoped>
.teamPicker {
  @include l-container;
}

.content {
  padding: 16px 0;
}
</style>
