const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let acc = 0;
    if (this.findArr(arr)) {
      arr = arr.flat();
      acc += this.calculateDepth(arr)
    }
    return ++acc;
  }

  findArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === typeof []) return true;
    }
    
    return false;
  }
}

module.exports = {
  DepthCalculator
};
