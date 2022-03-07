"use strict";
// 실행 순서: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("에러 발생!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // 에러 처리
  } else {
    alert("처리할 수 없는 에러");

    throw error; // 에러 다시 던지기
  }

}).then(function() {
  /* 여기는 실행되지 않습니다. */
}).catch(error => { // (**)

  alert(`알 수 없는 에러가 발생함: ${error}`);
  // 반환값이 없음 => 실행이 계속됨

});