"use strict";
let num = +prompt("양의 정수를 입력해주세요.", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("음수나 정수가 아닌 값은 처리할 수 없습니다.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "에러 발생");

alert( `연산 시간: ${diff}ms` );