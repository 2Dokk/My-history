"use strict";
function makeCounter() {

  // let count = 0 대신 아래 메서드(프로퍼티)를 사용함

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1