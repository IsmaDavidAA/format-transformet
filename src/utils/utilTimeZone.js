utils = {
  changeByTimeZone: (time, hours, minutes) => {
    var hour = new Date(time);
    hour.setHours(hour.getHours() + hours);
    hour.setMinutes(hour.getMinutes() + minutes);
    return hour;
  },
};
module.exports = utils;
