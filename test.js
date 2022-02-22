"use strict";
let i = 0;

setTimeout(() => alert(i), 100); // ?

// 아래 반복문을 다 도는 데 100ms 이상의 시간이 걸린다고 가정합시다.
for(let j = 0; j < 100000000; j++) {
  i++;
}