<template>
  <header class="Header">
    <div class="container">
      <div class="content">
        <div class="branding">
          Website.com
        </div>
        <div class="serverTime">
          <div class="serverTimeLabel">{{ clockLabel }}</div>
          <div class="serverTimeClock">
            {{ formattedTime }}
          </div>
        </div>
        <div class="serverPicker">
          <div class="label">Server:</div>
          <select v-model="serverId" class="select">
            <option v-for="option in serverOptions"
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
import { TimeHandler } from '@/scripts/TimeHandler';

export default {
  name: 'Header',
  data: function() {
    return {
      serverOptions: [
        {
          id: 'NA',
          displayName: 'America',
        },
        {
          id: 'EU',
          displayName: 'Europe',
        },
        {
          id: 'AS',
          displayName: 'Asia',
        },
      ],
      serverId: 'NA',
      datetime: TimeHandler.defaultTime,
      clockLabel: 'Daily reset in:',
    }
  },
  computed: {
    formattedTime: function() {
      return TimeHandler.fprint(this.datetime, 'HH:mm:ss');
    },
  },
  methods: {
    updateDateTime: function() {
      this.datetime = TimeHandler.getTimeToNextReset(this.serverId);

      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
  },
  watch: {
    serverId: function() {
      this.$emit('change-server', this.serverId);

      // Push data to browser localStorage
      LocalStorage.serializedSet('selectedServer', this.serverId);

      // update the timer with the new timezone
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    }
  },
  mounted: function() {
    // Check browser localStorage to see if there is data saved from a previous instance
    this.serverId = LocalStorage.serializedGet('selectedServer') || 'NA';
    this.$emit('change-server', this.serverId);

    // Start up the timer for the clock
    this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
  },
  beforeDestroy: function() {
    window.clearTimeout(this.$options.timer);
  }
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
  position: relative;
}

.branding {
  font-size: 24px;
  color: #fff;
}

.serverTime {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -51%);
}

.serverTimeLabel {
  @include Text--tiny;
}

.serverTimeClock {
  font-size: 28px;
  line-height: 28px;
  font-family: $font-family-secondary;
}

.serverPicker {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
}

.label {
  @include Text--small;
  font-family: $font-family-secondary;
  color: #fff;
  padding-bottom: 4px;
}

.select {
  appearance: auto;
  background-color: white;
  padding: 2px 4px;
}
</style>