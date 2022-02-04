"use strict";
let calculator = {
    read() {
        let num1 = +prompt('첫번째 숫자를 입력하세요','');
        let num2 = +prompt('두번째 숫자를 입력하세요','');
        return this.Num1 = num1, this.Num2 = num2;
    },
    sum() {
        let sum = this.Num1 + this.Num2;
        return sum;
    },
    mul() {
        let mul = this.Num1 * this.Num2;
        return mul;
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );