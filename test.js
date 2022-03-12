"use strict";
function calculator(str){
  let result = eval(str);
  return alert(result);
}

calculator(prompt('산술 표현식을 입력하시겠습니까?','2*3+2'));