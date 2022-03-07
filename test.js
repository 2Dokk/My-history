"use strict";
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("에러 발생!"); // 프라미스가 거부됨
}).catch(alert); // Error: 에러 발생!