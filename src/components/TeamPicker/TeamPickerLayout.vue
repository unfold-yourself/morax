<template>
  <div class="teamPicker">
    <div class="container">
      <div class="content">
        <IconPicker :label="characterPickerLabel"
                    :options="characterOptions"
                    v-on="$listeners" />
        <SearchPicker :label="weaponPickerLabel"
                      :options="weaponOptions"
                      v-on="$listeners" />
      </div>
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
  background-color: $card-bg-color;
}

.content {
  @include l-2-cols;
  padding: 24px 0;

  & > * {
    margin: 0 -1px;
  }

  & > * + * {
    @include bplte(xs)
    {
      margin-top: 16px;
    }
  }
}
</style>
