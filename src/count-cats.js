const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    const hiddenCat = '^^';
    let hiddenCatsCount = 0;
    matrix.map(elem => {
        hiddenCatsCount += elem.reduce((accum, cat) => cat === hiddenCat ? accum + 1 : accum, 0)
    });
    return hiddenCatsCount;
}

module.exports = {
    countCats
};
