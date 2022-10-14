const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    data: [],
    getLength() {
        return this.data.length;
    },
    addLink(value) {
        let str;
        if (value === null) {
            str = 'null';
        } else if (value === undefined) {
            str = '';
        } else {
            str = value.toString()
        }
        this.data.push(str);
        return this;
    },
    removeLink(position) {
        if (Number.isInteger(position) && position > 0 && position <= this.data.length) {
            this.data = this.data.filter((elem, idx) => (idx + 1) !== position);
            return this;
        } else if (Number.isInteger(position) === false) {
            throw new Error('You can\'t remove incorrect link!');
        } else if (position <= 0) {
            this.data = [];
            throw new Error('You can\'t remove incorrect link!');
        } else if (position > this.data.length) {
            this.data = [];
            throw new Error('You can\'t remove incorrect link!')
        }
    },
    reverseChain() {
        this.data.reverse();
        return this;
    },
    finishChain() {
        let result = '';
        for (let i = 0; i < this.data.length; i++) {
            if (i !== this.data.length - 1) {
                result += `( ${this.data[i]} )~~`
            } else {
                result += `( ${this.data[i]} )`
            }
        }
        this.data = [];
        return result;
    }
};

module.exports = {
    chainMaker
};
