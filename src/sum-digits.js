const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numToStr = String(n);
  let buffer = 0;

  for (let i = 0; i < numToStr.length; i++) {
    buffer += +numToStr[i];
  }

  if (buffer > 9) {
    return getSumOfDigits(buffer);
  } else {
    return buffer;
  }
}

module.exports = {
  getSumOfDigits
};
