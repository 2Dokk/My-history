"use strict";
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// 이름을 기준으로 정렬(Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// 나이를 기준으로 정렬(Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(users.sort(byField('name')))
console.log(users)
console.log(users.sort(byField('age')))
console.log(users)
alert(users);