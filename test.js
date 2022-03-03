"use strict";
let animal = {
  eat: function() { // 'eat() {...' 대신 'eat: function() {...'을 사용해봅시다.
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // SyntaxError: 'super' keyword unexpected here ([[HomeObject]]가 없어서 에러가 발생함)