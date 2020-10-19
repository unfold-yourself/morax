<template>
  <div class="teamPicker">
    <IconPicker :label="characterPickerLabel"
                :options="characterOptions"
                v-on="$listeners" />
    <SearchPicker :label="weaponPickerLabel"
                  :options="weaponOptions"
                  v-on="$listeners" />
  </div>
</template>

<script>
import IconPicker from './IconPicker.vue';
import SearchPicker from './SearchPicker.vue';

export default {
  name: 'TeamPickerLayout',
  components: {
    IconPicker,
    SearchPicker,
  },
  props: {
    'characterPickerLabel': String,
    'characterOptions': Array,
    'weaponPickerLabel': String,
    'weaponOptions': Array,
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
