"use strict";
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// fetch를 사용해 url을 프라미스로 매핑합니다.
let requests = urls.map(url => fetch(url));

// Promise.all은 모든 작업이 이행될 때까지 기다립니다.
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));