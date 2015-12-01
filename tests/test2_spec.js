"use strict";
describe("Test2", function() {
    var calInstance;
    it("should be defined", function() {
        calInstance = require('../scripts/test2.js').calc;
        expect(calInstance).toBeDefined();
    });

    it("should be able to add", function() {
        expect(calInstance.add).toBeDefined();
    });

    it("should add two integers correctly", function() {
        expect(calInstance.add(3, 5)).toEqual(8);
    });
});