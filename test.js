"use strict";
let user = { name: "John", years: 30 };

let {name,years : age,isAdmin = false} = user;
// 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false