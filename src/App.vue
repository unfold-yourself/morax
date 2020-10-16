<template>
  <div id="app">
    <DayPicker @change-day="updateDay" :_day="day"/>
    <TeamBuilder />
    <ActivitySuggester :_day="day"/>
  </div>
</template>

<script>
import ActivitySuggester from './components/ActivitySuggester.vue';
import DayPicker from './components/DayPicker.vue';
import TeamBuilder from './components/TeamBuilder.vue';
import { dayOfWeekInfo } from '@/assets/data/utils/utils.js';

const date = new Date();

export default {
  name: 'App',
  components: {
    ActivitySuggester,
    DayPicker,
    TeamBuilder,
  },
  data: function() {
    return {
      day: dayOfWeekInfo[date.getDay()].symbol
    }
  },
  methods: {
    updateDay: function(newDay) {
      this.day = newDay;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
