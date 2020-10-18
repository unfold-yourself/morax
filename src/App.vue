<template>
  <div id="app">
    <Header />
    <DayPicker @change-day="updateDay" :_day="day"/>
    <TeamBuilder />
    <ActivitySuggester :_day="day"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ActivitySuggester from './components/ActivitySuggester.vue';
import DayPicker from './components/DayPicker.vue';
import TeamBuilder from './components/TeamBuilder.vue';
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';

const date = new Date();

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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

<style src="reset-css"></style>
<style lang="scss" src="@/styles/reset.scss"></style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
