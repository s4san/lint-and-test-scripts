"use strict";

var calculator = {};
calculator.add = function(a, b) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return void 0;
};

module.exports = {
    calc : calculator
};
