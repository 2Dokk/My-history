"use strict";
function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name}님이 로그인하였습니다.`);
    },
  
    loginFail() {
      alert(`${this.name}님이 로그인에 실패하였습니다.`);
    },
  
  };
  
  askPassword(user.loginOk, user.loginFail);