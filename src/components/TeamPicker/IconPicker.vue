<template>
  <div class="iconPicker">
    <div class="heading">
      {{ label }}
    </div>
    <ul class="iconList">
      <li v-for="option in options"
          :key="option.id"
          class="iconListItem">
        <button :class="selected.includes(option.id) ? 'iconBtn is-selected' : 'iconBtn is-not-selected'"
                v-on:click="clickIcon($event, option.id)">
          <img class="icon"
              :src="require('@/assets/' + option.iconImageSrc)"
              :alt="option.displayName" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { LocalStorage } from '@/scripts/LocalStorage';

export default {
  name: 'IconPicker',
  props: {
    'label': String,
    'options': Array,
  },
  data: function() {
    return {
      selected: [],
    }
  },
  methods: {
    clickIcon: function(e, clickedId) {
      this.selected.includes(clickedId) ? 
        this.selected = this.selected.filter(el => el !== clickedId) :
        this.selected.push(clickedId);
    },
  },
  watch: {
    selected: function() {
      this.$emit('update-icon-picker', this.selected);
      
      // Push data to browser localStorage
      LocalStorage.serializedSet('selectedCharacters', this.selected);
    }
  },
  // Check browser localStorage to see if there is data saved from a previous instance
  mounted: function() {
    this.selected = LocalStorage.serializedGet('selectedCharacters') || this.selected;
  },
}
</script>

<style lang="scss" scoped>
.heading {
  @include Heading--h3;
  padding-bottom: 8px;
}

.iconList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -3px;
}

.iconBtn{
  @include focus-none;
  width: 45px;
  height: 45px;
  margin: 3px;
  border-radius: 4px;
  border: 2px solid $entity-border-color;
  overflow: hidden;
  background-color: $entity-default-bg;
  
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: $entity-lighter-bg;
  }

  &.is-selected {
    background-image: linear-gradient(
                        to bottom right,
                        $entity-highlight-color,
                        $entity-highlight-contrast);
    border-color: $entity-highlight-contrast;
  }

  &.is-not-selected {
    // filter: grayscale(50%);
  }
}

.icon {
  width: 100%;
  height: 100%;
}
</style>