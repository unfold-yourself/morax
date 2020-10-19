<template>
  <div class="multiSelect">
    <input class="input"
           v-model="input"
           :placeholder="placeholderText"
           @keyup.enter="selectFocusedOption" />
    <ul :class="input != '' ? 'autocomplete is-visible' : 'autocomplete'">
      <li v-for="option in filteredOptions"
          :key="option.id"
          class="autocompleteOption"
          v-on:click="optionSelect(option.id)">
        {{ option.displayName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MultiSelect',
  props: {
    'placeholderText': String,
    'options': Array, // Expects each option to be an object with at least fields: 'id', 'displayName'
    'selectedIds': Array,
  },
  data: function() {
    return {
      input: '',
    }
  },
  computed: {
    filteredOptions: function() {
      return this.options.filter(option => {
        return !this.selectedIds.includes(option.id);
      }).filter(option => {
        return option.displayName.toLowerCase().includes(this.input.toLowerCase());
      });
    },
  },
  methods: {
    optionSelect: function(clickedId) {
      this.$emit('option-select', clickedId);
      this.input = '';
    },
    selectFocusedOption: function() {
      // TODO: navigate options with arrow keys or TAB, track current focused option
      this.$emit('option-select', this.filteredOptions[0].id);
      this.input = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.multiSelect {
  position: relative;
}

.input {
  border: 1px solid #444;
  padding: 4px 8px;
  width: 100%;
}

.autocomplete {
  z-index: 100;
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 200px;
  top: 100%;
  background-color: #fff;
  display: none;

  &.is-visible {
    display: block;
  }
}

.autocompleteOption {
  padding: 4px 8px;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
}
</style>