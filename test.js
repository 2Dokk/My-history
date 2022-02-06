"use strict";
let str = "stringify";

// 동일한 부분 문자열을 반환합니다.
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// slice를 사용하면 결과가 다릅니다.
alert( str.slice(2, 6) ); // "ring" (같음)
alert( str.slice(6, 2) ); // "" (빈 문자열)