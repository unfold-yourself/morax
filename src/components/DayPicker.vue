<template>
  <div class="dayPicker">
    <div class="content">
      <span class="label">Today is</span>
      <select v-model="selectedDay">
        <option v-for="option in dayOptions"
                :value="option.index"
                :key="option.index">
          {{ option.name }}
        </option>
      </select>
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
      selectedDay: dayOfWeekInfo.findIndex(day => day.symbol === this._day),
      dayOptions: dayOfWeekInfo.map((day, idx) => ({
        name: day.displayName,
        index: idx,
      }))
    }
  },
  watch: {
    selectedDay: function() {
      this.$emit('change-day', dayOfWeekInfo[this.selectedDay].symbol);
    }
  }
}
</script>

<style lang="scss" scoped>
.dayPicker {
  @include l-container;
}

.content {
  padding: 16px 0;
  display: flex;
  justify-content: center;
}

.label {
  &::after {
    content: ' ';
  }
}
</style>