const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let dreamTeam = [];
    if (Array.isArray(members)) {
        members.map(element => {
            if (typeof element === 'string') {
                for (let i = 0; i < element.length; i++) {
                    if (element[i] !== ' ') {
                        dreamTeam.push(element[i].toUpperCase());
                        break;
                    }
                }
            }
        });
    }else return false;
    return dreamTeam.sort().join('')
}

module.exports = {
    createDreamTeam
};
