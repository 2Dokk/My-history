"use strict";
class CoffeeMachine {
  waterAmount = 0; // 물통에 차 있는 물의 양

  constructor(power) {
    this.power = power;
    alert( `전력량이 ${power}인 커피머신을 만듭니다.` );
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;f