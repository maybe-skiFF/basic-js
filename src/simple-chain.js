const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof position !== 'number') {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } 
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const resChain = this.chainArr.join(' )~~( ');
    this.chainArr = [];
    return `( ${resChain} )`;
  }
};

module.exports = {
  chainMaker
};
