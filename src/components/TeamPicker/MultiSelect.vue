<template>
  <div class="multiSelect">
    <input class="input"
           v-model="input"
           :placeholder="placeholderText"
           @keyup.enter="selectFocusedOption"
           @blur="blurHandler"
           @focus="focusHandler" />
    <ul :class="autocompleteOpen ? 'autocomplete is-visible' : 'autocomplete'">
      <li v-for="option in filteredOptions"
          :key="option.id"
          class="autocompleteOption"
          @mousedown="mousedownHandler($event)"
          @mouseup="mouseupHandler"
          v-on:click="optionSelect(option.id)"
          tabindex="0">
        {{ option.displayName }} ({{ option.rarity }}*)
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
      autocompleteOpen: false,
      disableBlur: false,
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
    },
    // Check the event before blur - if clicked on an autocomplete option, 
    //  disable blur so the autocomplete remains open for the mouseup event
    mousedownHandler: function(e) {
      const target = e.target;
      this.disableBlur = target && target.classList.contains('autocompleteOption');
    },
    // hide the autocomplete whenever the input loses focus
    blurHandler: function() {
      if (!this.disableBlur) {
        this.autocompleteOpen = false;
      }
    },
    mouseupHandler: function() {
      if (this.disableBlur) {
        this.disableBlur = false;
        this.autocompleteOpen = false;
      }
    },
    // show the autocopmlete whenever the input gains focus & there is text already present
    focusHandler: function() {
      this.autocompleteOpen = true;
    },
  },
  watch: {
    // show/hide the autocomplete (update whenever input changes)
    input: function() {
      this.autocompleteOpen = this.input !== '';
    },
  },
}
</script>

<style lang="scss" scoped>
.multiSelect {
  position: relative;
}

.input {
  @include focus-none;
  @include Text--small;
  border-bottom: 2px solid $base-bg-color;
  padding: 8px 4px;
  width: 100%;

  &:focus {
    background-color: #ccc;
  }
}

.autocomplete {
  z-index: 100;
  position: absolute;
  top: 100%;
  width: 100%;
  height: auto;
  max-height: 100px;
  overflow-y: auto;
  background-color: #fff;
  display: none;

  &.is-visible {
    display: block;
  }
}

.autocompleteOption {
  @include Text--small;
  padding: 6px 8px;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
}
</style>