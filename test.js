"use strict";
function delay(ms) {
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve()
    }, ms);
  }
  )
}

delay(3000).then(() => alert('3초후 실행'));