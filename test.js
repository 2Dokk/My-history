"use strict";
let animal = {
  name: "동물",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} 이/가 먹이를 먹습니다.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "토끼",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "귀가 긴 토끼",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// 이제 제대로 동작합니다
longEar.eat();  // 귀가 긴 토끼 이/가 먹이를 먹습니다.