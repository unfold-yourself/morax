<template>
  <div class="searchPicker">
    <div class="heading">
      {{ label }}
    </div>
    <div class="searchWrapper">
      <MultiSelect placeholderText="Search for a weapon"
                  :options="options"
                  :selectedIds="selected"
                  @option-select="addOptionById" />
    </div>
    <ul v-if="selectedOptions.length > 0" class="selectedOptions">
      <li v-for="option in selectedOptions"
          :key="option.id"
          class="option"
          v-on:click="removeOptionById(option.id)">
        <img class="imageIcon"
            :src="require('@/assets/' + option.iconImageSrc)"
            :alt="option.displayName" />
        <span class="label">
          {{ option.displayName }}
        </span>
        <img class="imageRemove"
             src="@/assets/images/close.svg"
             alt="remove this option" />
      </li>
    </ul>
  </div>
</template>

<script>
import MultiSelect from './MultiSelect.vue';
import { weapons } from '@/assets/data/weapons';

export default {
  name: 'SearchPicker',
  components: {
    MultiSelect,
  },
  props: {
    'label': String,
    'options': Array,
  },
  data: function() {
    return {
      selected: [],
    }
  },
  computed: {
    selectedOptions: function() {
      return weapons.filter(weapon => this.selected.includes(weapon.id));
    }
  },
  watch: {
    selected: function() {
      this.$emit('update-search-picker', this.selected);
    }
  },
  methods: {
    addOptionById: function(id) {
      this.selected.includes(id) ? {} : this.selected.push(id);
    },
    removeOptionById: function(id) {
      this.selected = this.selected.filter(option => option !== id);
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  @include Heading--h3;
  padding-bottom: 8px;
}

.searchWrapper {
  width: 250px;
}

.selectedOptions {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
  padding-top: 8px;
}

.option {
  margin: 2px;
  padding: 2px;
  border-radius: 999px;
  border: 2px solid cornflowerblue;
  display: flex;
  align-items: center;
  background-color: #444;
  padding-right: 8px;

  &:hover
  {
    cursor: pointer;
  }
}

.imageIcon {
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
  font-size: 12px;
}

.imageRemove {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 8px;
}
</style>