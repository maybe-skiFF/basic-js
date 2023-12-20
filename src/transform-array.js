const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  
  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
        i += 2
      } else {
        i++
      }
    } else if (arr[i] === '--discard-prev') {
      resArr.pop()
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        resArr.push(arr[i + 1])
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined) {
        resArr.push(arr[i - 1])
      }
    } else {
      resArr.push(arr[i])
    }
  }

  return resArr;
}

module.exports = {
  transform
};
