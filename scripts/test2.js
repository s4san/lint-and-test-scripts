"use strict";
var calculator = (function() {
    var add = function(a, b) {
        return a + b;
    };

    return {
        add : add
    };
})();

module.exports = {
    calc : calculator
};