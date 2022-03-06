"use strict";
try {
    ...
    readUser()  // 잠재적 에러 발생처
    ...
  } catch (err) {
    if (err instanceof ValidationError) {
      // validation 에러 처리
    } else if (err instanceof SyntaxError) {
      // 문법 에러 처리
    } else {
      throw err; // 알 수 없는 에러는 다시 던지기 함
    }
  }