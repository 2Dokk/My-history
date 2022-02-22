"use strict";
function printNumber(from, to){
  let current = from;
  let timerID = setInterval(function(){
    console.log(current);
    if (current++ == to){
      clearInterval(timerID);
    }
  }, 1000)
}

printNumber(5,10);