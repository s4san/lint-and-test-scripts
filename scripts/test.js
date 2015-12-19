"use strict";

var calculator = {};
calculator.add = function(a, b) {
    if(typeof a === 'Number' && typeof b === 'Number') {
        return a + b;
    }
    return void 0;
};

module.exports = {
    calc : calculator
};
