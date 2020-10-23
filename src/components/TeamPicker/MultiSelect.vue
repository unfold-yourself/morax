<template>
  <div class="multiSelect" role="combobox" :aria-expanded="autocompleteOpen" aria-owns="search-input">
    <input id="search-input"
           class="input"
           v-model="input"
           :placeholder="placeholderText"
           @keydown="keyboardHandler($event)"
           @focus="focusHandler"
           @blur="blurHandler"
           aria-autocomplete="list"
           aria-controls="search-autocomplete"
           :aria-activedescendant="autocompleteOpen ? 'autocomplete-option-' + focusedOptionIdx : ''"/>
    <div v-if="autocompleteOpen && filteredOptions.length > 0" class="autocomplete">
      <ul id="search-autocomplete"
          class="list"
          role="listbox">
        <li v-for="(option, idx) in filteredOptions"
            :id="'autocomplete-option-' + idx"
            :key="option.id"
            :class="focusedOptionIdx === idx ? 'option is-focused' : 'option'"
            @mousedown="mousedownHandler($event)"
            @click="optionSelect(option.id)"
            @mouseover="optionHover(idx)"
            tabindex="0"
            :aria-selected="focusedOptionIdx === idx">
          {{ option.displayName }} ({{ option.rarity }}*)
        </li>
      </ul>
    </div>
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
      focusedOptionIdx: 0,
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
    optionHover: function(clickedId) {
      this.focusedOptionIdx = clickedId;
    },
    selectFocusedOption: function() {
      this.optionSelect(this.filteredOptions[this.focusedOptionIdx].id);
    },
    focusHandler: function() {
      if (this.input !== '') {
        this.autocompleteOpen = true;
      }
    },
    // Check the event before blur - if clicked on an autocomplete option, 
    //  disable blur so the autocomplete remains open for the mouseup event
    mousedownHandler: function(e) {
      const target = e.target;
      this.disableBlur = target && target.classList.contains('option');
    },
    // hide the autocomplete whenever the input loses focus
    blurHandler: function() {
      if (!this.disableBlur) {
        this.autocompleteOpen = false;
      } else {
        this.disableBlur = false;
      }
    },
    // Keyboard input handler
    keyboardHandler: function(e) {
      const specialKeys = [
        'Enter',
        'Tab',
        'Escape', 'Esc',
        'ArrowDown', 'Down',
        'ArrowUp', 'Up'
      ];

      if (specialKeys.includes(e.key)) { e.preventDefault(); }

      switch (e.key) {
        case 'Enter':
          this.selectFocusedOption();
          break;
        case 'Tab':
        case 'ArrowDown':
        case 'Down':
          this.focusedOptionIdx = this.focusedOptionIdx >= this.filteredOptions.length ?
            0 :
            this.focusedOptionIdx + 1;
          break;
        case 'ArrowUp':
        case 'Up':
          this.focusedOptionIdx = this.focusedOptionIdx <= 0 ?
            this.filteredOptions.length - 1 :
            this.focusedOptionIdx - 1;
          break;
        case 'Escape':
        case 'Esc':
          this.autocompleteOpen = false;
          break;
      }
    }
  },
  watch: {
    input: function() {
      if (this.input === '') {
        this.focusedOptionIdx = 0;
      }
      this.autocompleteOpen = this.input !== '';
    }
  }
}
</script>

<style lang="scss" scoped>
.multiSelect {
  position: relative;
}

.input {
  @include focus-none;
  @include Text--small;
  border-bottom: 2px solid $entity-border-color;
  padding: 8px 4px 4px;
  width: 100%;

  &:focus {
    background-color: $entity-lighter-bg;
    border-color: $entity-highlight-contrast;
  }
}

.autocomplete {
  z-index: 100;
  position: absolute;
  top: 100%;
  width: 100%;
  height: auto;
  max-height: 160px;
  margin-top: 2px;
  border-radius: 6px;
  border: 1px solid $entity-border-color;
  overflow: hidden;
}

.list {
  overflow-y: auto;
  background-color: #fff;
  max-height: 160px;
}

.option {
  @include Text--small;
  padding: 6px 8px;

  &:hover {
    cursor: pointer;
  }

  &.is-focused {
    background-color: $entity-hover-bg;
  }
}
</style>