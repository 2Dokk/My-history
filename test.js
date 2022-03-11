"use strict";
let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() { // [Symbol.asyncIterator]: async function*()와 동일
    for(let value = this.from; value <= this.to; value++) {

      // 값 사이 사이에 약간의 공백을 줌
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
};

(async () => {

  for await (let value of range) {
    alert(value); // 1, 2, 3, 4, 5
  }

})();