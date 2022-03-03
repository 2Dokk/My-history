"use strict";
class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// 메서드 hasOwnProperty는 Object.prototype에서 왔습니다.
alert( rabbit.hasOwnProperty('name') ); // true