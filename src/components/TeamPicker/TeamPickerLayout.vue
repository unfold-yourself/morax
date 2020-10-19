<template>
  <div class="teamPicker">
    <div class="content">
      <IconPicker :label="characterPickerLabel"
                  :options="characterOptions"
                  v-on="$listeners" />
      <SearchPicker :label="weaponPickerLabel"
                    :options="weaponOptions"
                    v-on="$listeners" />
    </div>
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
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 24px;

  & > * {
    width: 50%;
    flex-grow: 1;
    padding: 0 42px;

    &:not(:last-child) {
      border-right: 1px solid #888;
    }
  }
}
</style>
