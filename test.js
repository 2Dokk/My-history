"use strict";
// 콜백의 성공 결과를 담은 배열을 얻게 해주는 promisify(f, true)
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // f에 사용할 커스텀 콜백
        if (err) {
          reject(err);
        } else {
          // manyArgs가 구체적으로 명시되었다면, 콜백의 성공 케이스와 함께 이행 상태가 됩니다.
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
};

// 사용법:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...)