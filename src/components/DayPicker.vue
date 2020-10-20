<template>
  <div class="dayPicker">
    <div class="container">
      <div class="content">
        <div class="activeBackground"
             ref="js-activeBackground">
          <div v-for="option in dayOptions"
               :key="option.index"
               class="activeDay"
               :ref="selectedDay === option.index ? 'js-activeDay' : null">
            {{ option.name }}
          </div>
        </div>
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
    },
  },
  methods: {
    changeDay: function(idx) {
      this.$emit('change-day', dayOfWeekInfo[idx].symbol);
    },
    updateActiveDay: function() {
      const activeDayEl = this.$refs['js-activeDay'][0];
      const offsetLeft = activeDayEl.offsetLeft;
      const offsetRight = activeDayEl.parentElement.offsetWidth - (activeDayEl.offsetLeft + activeDayEl.offsetWidth);
      const activeBackgroundEl = this.$refs['js-activeBackground'];
      activeBackgroundEl.style.clipPath = `inset(0 ${offsetRight}px 0 ${offsetLeft}px)`;
    }
  },
  mounted: function() {
    this.updateActiveDay();
  },
  updated: function() {
    this.updateActiveDay();
  },
}
</script>

<style lang="scss" scoped>
.dayPicker {
  background-color: $tabs-bg-color;
}

.content {
  display: flex;
  justify-content: center;
  position: relative;
}

.activeBackground {
  background-color: $base-bg-color;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.3s ease-in-out;
}

@mixin DayPicker-button {
  @include Heading--h4;
  padding: 12px 18px 8px;
  width: 140px;
  flex: 1 1 auto;
  text-align: center;
}

.activeDay {
  @include DayPicker-button;
  font-weight: 700;
  color: #fff;
  cursor: default;
}

.button {
  @include focus-none;
  @include DayPicker-button;
  border-bottom: 4px solid transparent;
  padding: 12px 18px 4px;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 4px solid $entity-highlight-color;
  }
}
</style>