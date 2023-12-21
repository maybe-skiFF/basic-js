const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let buffer = [];
  let concatBuffer = [];
  let resStr = '';

  if (options.hasOwnProperty('additionRepeatTimes')) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      buffer.push(String(options.addition));
    }
  } else {
    if (options.hasOwnProperty('addition')) {
      buffer.push(String(options.addition));
    }
  }

  if (options.hasOwnProperty('additionSeparator')) {
    buffer = buffer.join(options.additionSeparator);
  } else {
    buffer = buffer.join('|');
  }

  resStr = `${str}${buffer}`;

  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      concatBuffer.push(resStr);
    }
  } else {
    concatBuffer.push(resStr);
  }

  if (options.hasOwnProperty('separator')) {
    concatBuffer = concatBuffer.join(options.separator)
  } else {
    concatBuffer = concatBuffer.join('+')
  }

  return concatBuffer;
}

module.exports = {
  repeater
};
