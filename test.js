"use strict";
function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
  
  // 사용법:
  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // 시간을 고정한 부분 메서드를 추가함
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user.sayNow("Hello");
  // 출력값 예시:
  // [10:00] John: Hello!