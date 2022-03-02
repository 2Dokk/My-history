"use strict";
// class User와 동일한 기능을 하는 순수 함수를 만들어보겠습니다.

// 1. 생성자 함수를 만듭니다.
function User(name) {
    this.name = name;
  }
  // 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있기 때문에
  // constructor 프로퍼티를 명시적으로 만들 필요가 없습니다.
  
  // 2. prototype에 메서드를 추가합니다.
  User.sayHi = function() {
    alert(this.name);
  };
  
  // 사용법:
  let user = new User("John");
  User.sayHi();
  user.sayHi();