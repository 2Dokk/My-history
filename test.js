"use strict";
function Calculator() {
    this.read = function() {
        this.Num1 = +prompt('First Number',0);
        this.Num2 = +prompt('Second Number',0);
    }
    this.sum = function() {
        return this.Num1 + this.Num2;
    }
    this.mul = function() {
        return this.Num1 * this.Num2;
    }
};
let calculator = new Calculator();
calculator.read();
alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());