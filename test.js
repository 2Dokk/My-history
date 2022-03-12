"use strict";
let a = 1;

function f() {
  let a = 2;

  eval('alert(a)'); // 2
}

f();