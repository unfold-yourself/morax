<template>
  <div class="iconPicker">
    <div class="heading">
      {{ label }}
    </div>
    <ul class="iconList">
      <li v-for="option in options"
          :key="option.id"
          class="iconListItem">
        <img :class="selected.includes(option.id) ? 'icon is-selected' : 'icon'"
             :src="require('@/assets/' + option.iconImageSrc)"
             :alt="option.displayName"
             v-on:click="clickIcon($event, option.id)" />
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
  padding-bottom: 8px;
}

.iconList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}

.iconListItem {
  margin: 4px;
}

.icon {
  width: 40px;
  height: 40px;
  background-color: paleturquoise;
  border-radius: 50%;
  border: 2px solid #0000;

  &:hover {
    cursor: pointer;
  }

  &.is-selected {
    border: 2px solid green;
  }
}
</style>