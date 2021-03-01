module.exports = class DepthCalculator {
    constructor() {
        this.calculateDepth = this.calculateDepth.bind(this);
    }
    calculateDepth = arr => arr.find( el => Array.isArray(el)) ? 1 + this.calculateDepth(arr.flat()) : 1; 
}