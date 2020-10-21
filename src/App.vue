<template>
  <div id="app">
    <Header @change-server="changeTimezone" />
    <TeamPicker @update-selected-characters="updateSelectedCharacters"
                @update-selected-weapons="updateSelectedWeapons" />
    <DayPicker @change-day="updateDay" :_day="day"/>
    <ActivitySuggester :_day="day"
                       :selectedCharacters="selectedCharacters"
                       :selectedWeapons="selectedWeapons" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ActivitySuggester from './components/ActivitySuggester/ActivitySuggester.vue';
import DayPicker from './components/DayPicker.vue';
import TeamPicker from './components/TeamPicker/TeamPicker.vue';
import { dayOfWeekInfo } from '@/assets/data/utils/days.js';

let clientDate = new Date();

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ActivitySuggester,
    DayPicker,
    TeamPicker,
  },
  data: function() {
    return {
      day: dayOfWeekInfo[clientDate.getDay()].symbol,
      timezone: 'Australia/Brisbane',
      selectedCharacters: [],
      selectedWeapons: [],
    }
  },
  methods: {
    setDay: function() {
      const todayTZString = new Date().toLocaleString("en-US", {
        timeZone: this.timezone,
      });
      const dayOfWeek = new Date(todayTZString).getDay();
      this.day = dayOfWeekInfo[dayOfWeek].symbol;
    },
    updateDay: function(newDay) {
      this.day = newDay;
    },
    updateSelectedCharacters: function(selected) {
      this.selectedCharacters = selected;
    },
    updateSelectedWeapons: function(selected) {
      this.selectedWeapons = selected;
    },
    changeTimezone: function(timezone) {
      this.timezone = timezone;
    },
  },
  mounted: function() {
    this.setDay();
  }
}
</script>

<style src="reset-css"></style>
<style lang="scss" src="@/styles/reset.scss"></style>

<style lang="scss">
#app {
  font-family: $font-family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
