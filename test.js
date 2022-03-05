"use strict";
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

alert(`전력량이 ${coffeeMachine.power}인 커피머신을 만듭니다.`); // 전력량이 100인 커피머신을 만듭니다.

coffeeMachine._power = 25; // Error (setter 없음)