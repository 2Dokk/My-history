"use strict";
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // 확인해 보세요.
  function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2); // 1초 후 3 출력