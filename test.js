"use strict";
let user = { };

user = new Proxy(user, {
  ownKeys(target) { // 프로퍼티 리스트를 얻을 때 딱 한 번 호출됩니다.
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // 모든 프로퍼티를 대상으로 호출됩니다.
    return {
      enumerable: true,
      configurable: true
      /* 이 외의 플래그도 반환할 수 있습니다. "value:..."도 가능합니다. */
    };
  }

});

alert( Object.keys(user) ); // a, b, c