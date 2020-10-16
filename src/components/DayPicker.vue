<template>
  <div class="DayPicker">
    <span class="label">Today is</span>
    <select v-model="selectedDay">
      <option v-for="option in dayOptions"
              :value="option.index"
              :key="option.index">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { dayOfWeekInfo } from '@/assets/data/utils/utils.js';

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

</style>