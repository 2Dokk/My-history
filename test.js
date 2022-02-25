"use strict";
function sayHi() {
    alert(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // call을 사용해 원하는 객체가 'this'가 되도록 합니다.
  sayHi.call( user ); // this = John
  sayHi.call( admin ); // this = Admin