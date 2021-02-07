const chainMaker = {
  arr : [],
  getLength() {
      return this.arr.length;
  },
  addLink(value) {
      value === '' ?  this.arr.push('( )') : this.arr.push(`( ${value} )`) ;
      return this;
  },
  removeLink(i) {
    if (this.arr[i - 1]) this.arr.splice(i - 1, 1);
    else {
        this.arr.length = 0;
        throw new Error('Incorrect position');
    }
    return this;
},
  reverseChain() {
      this.arr.reverse();
      return this;
  },
  finishChain() {
      // let result = this.arr.reduce((prev, el) => prev + '~~' + el);
      let result = this.arr.join('~~');
      this.arr.length = 0;
      return result;
  }
};

module.exports = chainMaker;
