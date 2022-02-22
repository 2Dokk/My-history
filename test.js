"use strict";
function printNumber(from, to){
  let current = from;
  let timeId = setTimeout(function run(){
    console.log(from);
    if (from == to){
      clearTimeout(timeId);
    } else{
      setTimeout(run,1000);
    }
    current++
  }, 1000);
}

printNumber(5,10);