"use strict";
let animal = {
    eats: true,
    walk() {
      alert("동물이 걷습니다.");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  // 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
  longEar.walk(); // 동물이 걷습니다.
  alert(longEar.jumps); // true (rabbit에서 상속받음)