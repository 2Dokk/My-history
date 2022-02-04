"use strict";
function Accumulator(startingValue) {
    this.value = startingValue,
    this.read = function() {
        return this.value += +prompt('더할 값을 입력해주십시오',0);
    };
};
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);