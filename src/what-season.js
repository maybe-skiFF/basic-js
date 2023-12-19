const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('toString') || !date || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  let seasonMonth = date.getMonth();

  if (seasonMonth === 11 || seasonMonth < 2) return 'winter';
  else if (seasonMonth <= 4) return 'spring';
  else if (seasonMonth <= 7) return 'summer';
  else return 'autumn ';
}

module.exports = {
  getSeason
};
