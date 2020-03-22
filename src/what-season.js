module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('getMonth')) {
    throw Error;
  }

  let seasons = [
    'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'
  ];

  return seasons[date.getMonth()];
};
