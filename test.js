"use strict";
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650
  
  function sumSalaries(obj){
      let sum = 0;
      for (let num of Object.values(obj)){
          sum += num;
      }
      return sum;
  }