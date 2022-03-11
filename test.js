"use strict";
let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target,prop,receiver){
      if (prop in target){
        return target[prop];
      } else {
        throw new Error();
      }
    }
      /* 여기에 코드를 작성하세요. */
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist "age"