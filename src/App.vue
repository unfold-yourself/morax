<template>
  <div id="app">
    <Header />
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

const date = new Date();

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
      day: dayOfWeekInfo[date.getDay()].symbol,
      selectedCharacters: [],
      selectedWeapons: [],
    }
  },
  methods: {
    updateDay: function(newDay) {
      this.day = newDay;
    },
    updateSelectedCharacters: function(selected) {
      this.selectedCharacters = selected;
    },
    updateSelectedWeapons: function(selected) {
      this.selectedWeapons = selected;
    }
  },
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
