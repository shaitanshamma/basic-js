const {NotImplementedError} = require('../extensions/index.js');

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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const D_P = '--double-prev';
    const D_N = '--double-next';
    const DS_N = '--discard-next';
    const DS_P = '--discard-prev';
    let func = ['--double-prev', '--double-next', '--discard-prev', '--double-next']
    let resultList = [];
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!')
    } else if (arr.length === 0) {
        return resultList;
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === D_P && arr[i - 1]) {
            resultList.push(arr[i - 1])
        }
        else if (arr[i] === DS_N && arr[i + 2]===D_P) {
            i=i+2;
        }
        else if (arr[i] === DS_N && arr[i + 2]===DS_P) {
            i=i+2;
        }
        else if (arr[i] === D_P && !arr[i - 1]) {

        } else if (arr[i] === D_N && arr[i + 1]) {
            resultList.push(arr[i + 1])
        } else if (arr[i] === D_N && !arr[i + 1]) {

        }else if (arr[i] === DS_P && arr[i - 1]) {
            resultList.pop();
        } else if (arr[i] === DS_P && !arr[i - 1]) {

        }else if (arr[i] === DS_N && arr[i + 1]) {
            i++
        } else if (arr[i] === DS_N && !arr[i + 1]) {

        } else if (arr[i] === DS_N && arr[i + 2]===D_P) {
            i=i+2;
        }
        else if (arr[i] === DS_N && arr[i + 2]===DS_P) {
            i=i+2;
        }
        else {
            resultList.push(arr[i])
        }

        // for (let j = 0; j < func.length; j++) {
        //     if (arr[i] !== func[j]) {
        //         resultList.push(arr[i]);
        //     }
        // }
    }
    return resultList;
}

module.exports = {
    transform
};
