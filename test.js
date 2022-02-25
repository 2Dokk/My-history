"use strict";
let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert(`slow(${x})을/를 호출함`);
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // 이젠 'this'가 제대로 전달됩니다.
      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용
  
  alert( worker.slow(2) ); // 제대로 동작합니다.
  alert( worker.slow(2) ); // 제대로 동작합니다. 다만, 원본 함수가 호출되지 않고 캐시 된 값이 출력됩니다.