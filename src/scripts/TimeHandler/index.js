const moment = require('moment-timezone');

class TimeHandler {
  constructor() {}

  static timezones = {
    'NA': 'America/New_York',
    'EU': 'Etc/GMT-1',
    'AS': 'Etc/GMT-8',
  }

  static defaultTime = moment.utc(0);

  static fprint(t, fmt='MMMM, D, YYYY, hh:mm:ss ZZ') {
    return t.format(fmt);
  }

  static getServerTime(serverId) {
    return moment.utc(new Date()).tz(this.timezones[serverId]);
  }

  static getNextServerResetTime(serverId) {
    const serverTime = this.getServerTime(serverId);
    const resetTime = serverTime.set({
      'millisecond': 0,
      'second': 0,
      'minute': 0,
      'hour': 4 + (serverTime.hour() < 4 ? 0 : 24),
    }); // 4:00 am today, or the next day (+24 hrs)
    return resetTime;
  }

  static getTimeToNextReset(serverId) {
    const nextResetTime = this.getNextServerResetTime(serverId);
    const nowTime = moment(new Date());
    return moment.utc(nextResetTime - nowTime);
  }

  static getServerDay(serverId) {
    const serverTime = this.getServerTime(serverId).subtract(4, 'hours');
    return this.fprint(serverTime, 'd')
  }
}

export {
  TimeHandler,
}