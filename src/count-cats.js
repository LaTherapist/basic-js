module.exports = function countCats(matrix) {
    return matrix.flat().filter( x => x === '^^').length;
};
