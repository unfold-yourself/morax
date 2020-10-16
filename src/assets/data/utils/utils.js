export const DAY = Object.freeze({
  SUNDAY: Symbol('sunday'),
  MONDAY: Symbol('monday'),
  TUESDAY: Symbol('tuesday'),
  WEDNESDAY: Symbol('wednesday'),
  THURSDAY: Symbol('thursday'),
  FRIDAY: Symbol('friday'),
  SATURDAY: Symbol('saturday'),
});

export const dayOfWeekInfo = [
  {
    symbol: DAY.SUNDAY,
    displayName: 'Sunday',
  },
  {
    symbol: DAY.MONDAY,
    displayName: 'Monday',
  },
  {
    symbol: DAY.TUESDAY,
    displayName: 'Tuesday',
  },
  {
    symbol: DAY.WEDNESDAY,
    displayName: 'Wednesday',
  },
  {
    symbol: DAY.THURSDAY,
    displayName: 'Thursday',
  },
  {
    symbol: DAY.FRIDAY,
    displayName: 'Friday',
  },
  {
    symbol: DAY.SATURDAY,
    displayName: 'Saturday',
  }
];
