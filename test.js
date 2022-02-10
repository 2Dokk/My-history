"use strict";
let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = 이름이 title인 프로퍼티
  // rest = 나머지 프로퍼티들
  let {title, ...rest} = options;
  
  // title엔 "Menu", rest엔 {height: 200, width: 100}이 할당됩니다.
  alert(rest.height);  // 200
  alert(rest.width);   // 100