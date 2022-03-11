"use strict";
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 1 (*) 프락시는 "get length" 연산까지 타깃 객체에 전달해줍니다.

sayHi("John"); // Hello, John! (3초 후)