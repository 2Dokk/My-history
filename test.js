"use strict";
window.addEventListener('unhandledrejection', function(event) {
  // 이벤트엔 두 개의 특별 프로퍼티가 있습니다.
  alert(event.promise); // [object Promise] - 에러를 생성하는 프라미스
  alert(event.reason); // Error: 에러 발생! - 처리하지 못한 에러 객체
});

new Promise(function() {
  throw new Error("에러 발생!");
}); // 에러 처리 핸들러, catch가 없음