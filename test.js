"use strict";
let dictionary = Object.create(null, {
    toString: { // toString 프로퍼티를 정의합니다.
      value() { // value는 함수입니다.
        return Object.keys(this).join();
      }
    }
});
  
dictionary.apple = "Apple";
dictionary.__proto__ = "test";
  
// apple과 __proto__는 반복문 안에 있습니다.
for(let key in dictionary) {
  alert(key); // "apple" 다음 "__proto__"가 있습니다.
}
  
// toString에 의해 쉼표로 구분된 프로퍼티 목록
alert(dictionary); // "apple,__proto__"
