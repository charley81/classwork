const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su']

const getWeekDay = dayNum => {
  if (dayNum < 0 || dayNum > 6) dayNum = 0
  return this.weekdays[dayNum]
}

const school = 'PerScholas'

module.exports = {
  weekdays,
  getWeekDay,
  school,
}
