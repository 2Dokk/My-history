"use strict";
let json = '{"name":"John", "age": 30}'; // 서버로부터 전달받은 데이터

let user = JSON.parse(json); // 전달받은 문자열을 자바스크립트 객체로 변환

// 문자열 형태로 전달받은 user가 프로퍼티를 가진 객체가 됨
alert( user.name ); // John
alert( user.age );  // 30