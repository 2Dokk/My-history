"use strict";
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'diffSubtract에 소모된 시간: ' + time1 );
  alert( 'diffGetTime에 소모된 시간: ' + time2 );