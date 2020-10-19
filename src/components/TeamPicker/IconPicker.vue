<template>
  <div class="iconPicker">
    <div class="heading">
      {{ label }}
    </div>
    <ul class="iconList">
      <li v-for="option in options"
          :key="option.id"
          class="iconListItem">
        <button :class="selected.includes(option.id) ? 'iconBtn is-selected' : 'iconBtn'"
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
    }
  }
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
  @include focus-subtle;
  width: 45px;
  height: 45px;
  margin: 3px;
  border-radius: 4px;
  border: 2px solid #0000;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
  }

  &.is-selected {
    border: 2px solid green;
  }
}

.icon {
  width: 100%;
  height: 100%;
  background-color: paleturquoise;
}
</style>