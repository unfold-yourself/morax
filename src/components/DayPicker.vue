<template>
  <div class="dayPicker">
    <div class="container">
      <div class="content">
        <button v-for="option in dayOptions"
                :key="option.index"
                @click="changeDay(option.index)"
                :class="selectedDay === option.index ? 'button is-selected' : 'button'">
          {{ option.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';

export default {
  name: 'DayPicker',
  props: {
    '_day': Symbol
  },
  data: function () {
    return {
      dayOptions: dayOfWeekInfo.map((day, idx) => ({
        name: day.displayName,
        index: idx,
      })),
    }
  },
  computed: {
    selectedDay: function() {
      return dayOfWeekInfo.findIndex(day => day.symbol === this._day);
    }
  },
  methods: {
    changeDay: function(idx) {
      this.$emit('change-day', dayOfWeekInfo[idx].symbol);
    }
  }
}
</script>

<style lang="scss" scoped>
.dayPicker {
  background-color: $tabs-bg-color;
}

.content {
  display: flex;
  justify-content: center;
}

.button {
  @include focus-none;
  @include Heading--h4;
  padding: 12px 18px 8px;

  &:hover,
  &:active,
  &:focus {
    background-color: $tabs-hover-color;
  }

  &.is-selected {
    background-color: $base-bg-color;
    font-weight: 700;
    color: #fff;
  }
}
</style>