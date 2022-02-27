"use strict";
let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // Object.keys는 객체 자신의 키만 반환합니다.
  alert(Object.keys(rabbit)); // jumps
  
  // for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
  for(let prop in rabbit) alert(prop); // jumps, eats