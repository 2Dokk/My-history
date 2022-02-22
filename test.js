"use strict";
/** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
let timerId = setInterval(() => alert('째깍'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('째깍');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);