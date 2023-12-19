const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToStr = String(n);
  let res = [];

  for (let i = 0; i < numToStr.length; i++) {
    res.push(numToStr.slice(0, i) + numToStr.slice(i + 1));
  }

  return Number(res.sort().at(-1));
}

module.exports = {
  deleteDigit
};
