<template>
  <div id="app">
    <Header @change-server="changeServer" />
    <TeamPicker @update-selected-characters="updateSelectedCharacters"
                @update-selected-weapons="updateSelectedWeapons" />
    <DayPicker @change-day="updateDay" :_day="day" :serverId="serverId" />
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
import { TimeHandler } from '@/scripts/TimeHandler';

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
      serverId: 'NA',
      selectedCharacters: [],
      selectedWeapons: [],
    }
  },
  methods: {
    setDay: function() {
      const dayIdx = TimeHandler.getServerDay(this.serverId);
      this.day = dayOfWeekInfo[dayIdx].symbol;
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
    changeServer: function(serverId) {
      this.serverId = serverId;
      this.setDay();
    },
  },
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
