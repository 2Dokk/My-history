"use strict";
class Animal {
  static planet = "지구";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Animal을 상속받음
class Rabbit extends Animal {
  hide() {
    alert(`${this.name}가 숨었습니다!`);
  }
}

let rabbits = [
  new Rabbit("흰 토끼", 10),
  new Rabbit("검은 토끼", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // 검은 토끼가 속도 5로 달립니다.

alert(Rabbit.planet); // 지구