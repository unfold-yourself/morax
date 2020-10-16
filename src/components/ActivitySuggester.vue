<template>
  <div class="ActivitySuggester">
    Suggest Activities here for {{ day }}
  </div>
</template>

<script>
import { dayOfWeekInfo } from '@/assets/data/utils/utils.js';

export default {
  name: 'ActivitySuggester',
  props: {
    '_day': Symbol
  },
  computed: {
    day: function() {
      return dayOfWeekInfo.find(day => day.symbol === this._day).displayName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>