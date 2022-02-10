"use strict";
let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) ); // 2

  function count(obj){
      return Object.values(obj).length;
  }