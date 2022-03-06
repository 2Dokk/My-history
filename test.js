"use strict";
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // 사용법
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }
  
    return user;
  }
  
  // try..catch와 readUser를 함께 사용한 예시
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
    }
  }