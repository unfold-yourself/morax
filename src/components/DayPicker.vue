<template>
  <div class="dayPicker">
    <div class="content">
      <div class="activeBackground"
            ref="js-activeBackground">
        <div v-for="option in dayOptions"
              :key="option.index"
              class="activeDay"
              :ref="selectedDay === option.index ? 'js-activeDay' : null">
          {{ option.name }}
          <span v-if="option.index === todayIdx" class="todayLabel">( it's today )</span>
        </div>
      </div>
      <button v-for="option in dayOptions"
              :key="option.index"
              @click="changeDay(option.index)"
              :class="['button', selectedDay === option.index ? 'is-selected' : '', option.index === todayIdx ? 'is-today' : '']">
        {{ option.index === todayIdx ? 'Today' : option.name }}
      </button>
    </div>
    <div class="mobileContent">
      <select v-model="daySelect" class="mobileSelect">
        <option v-for="option in dayOptions"
                :key="option.index"
                :value="option.index">
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';
import { TimeHandler } from '@/scripts/TimeHandler';

export default {
  name: 'DayPicker',
  props: {
    '_day': Symbol,
    'serverId': String,
  },
  data: function () {
    return {
      dayOptions: dayOfWeekInfo.map((day, idx) => ({
        name: day.displayName,
        index: idx,
      })),
      daySelect: dayOfWeekInfo.findIndex(day => day.symbol === this._day),
      todayIdx: parseInt(TimeHandler.getServerDay(this.serverId)),
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
  watch: {
    daySelect: function() {
      this.changeDay(this.daySelect);
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
  max-width: 940px;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;

  @include bplte(xs)
  {
    display: none;
  }
}

.mobileContent {
  display: none;
  padding: 8px 16px;

  @include bplte(xs)
  {
    display: block;
  }
}

.mobileSelect {
  appearance: auto;
  width: 100%;
}

.activeBackground {
  background-color: $base-bg-light;
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
  width: 140px;
  flex: 1 1 auto;
  text-align: center;
  display: block;
}

.activeDay {
  @include DayPicker-button;
  padding: 8px 14px;
  font-weight: 700;
  color: #fff;
  cursor: default;
  position: relative;
}

.button {
  @include focus-none;
  @include DayPicker-button;
  border-bottom: 4px solid transparent;
  padding: 8px 14px 4px;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 4px solid $entity-highlight-color;
  }

  &.is-today {
    font-weight: 700;
    background-color: #eee;
  }
}

.todayLabel {
  font-size: 8px;
  color: #fff;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>