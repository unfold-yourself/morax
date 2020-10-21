<template>
  <header class="Header">
    <div class="container">
      <div class="content">
        <div class="branding">
          Website.com
        </div>
        <div class="regionPicker">
          <div class="label">Server:</div>
          <select v-model="region" class="select">
            <option v-for="option in regionOptions"
                    :key="option.id"
                    :value="option.id"
                    class="option">
              {{ option.displayName }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { LocalStorage } from '@/scripts/LocalStorage';

export default {
  name: 'Header',
  data: function() {
    return {
      regionOptions: [
        {
          id: 'NA',
          displayName: 'America',
          timezone: 'Australia/Brisbane',
        },
        {
          id: 'EU',
          displayName: 'Europe',
          timezone: 'Africa/Asmara',
        },
        {
          id: 'AS',
          displayName: 'Asia',
          timezone: 'Asia/Dubai',
        },
        {
          id: 'NEA',
          displayName: 'TW/HK/MO',
          timezone: 'Asia/Muscat',
        },
      ],
      region: 'NA',
    }
  },
  watch: {
    region: function() {
      let selectedTimezone = this.regionOptions.find(el => el.id === this.region).timezone;
      this.$emit('change-server', selectedTimezone);

      // Push data to browser localStorage
      LocalStorage.serializedSet('selectedTimezone', selectedTimezone);
    }
  },
  // Check browser localStorage to see if there is data saved from a previous instance
  mounted: function() {
    let selectedTimezone = LocalStorage.serializedGet('selectedTimezone') || 'Australia/Brisbane';
    this.region = this.regionOptions.find(el => el.timezone === selectedTimezone).id;
  },
}
</script>

<style lang="scss" scoped>
.Header {
  text-align: center;
  background-color: $base-bg-color;
}

.content {
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.branding {
  font-size: 24px;
  color: #fff;
}

.regionPicker {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {
  @include Text--small;
  color: #fff;
  padding-bottom: 4px;
}

.select {
  appearance: auto;
  background-color: white;
  padding: 2px 4px;
}
</style>