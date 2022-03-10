"use strict";
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url){
  let response = await fetch(url);
  if (response.status == 200){
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  do {let name = prompt("GitHub username을 입력하세요.", "iliakan");
    var userJson = await loadJson(`https://api.github.com/users/${name}`);
    if (userJson instanceof HttpError && userJson.response.status == 400){
      alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
    }
  } while (userJson.name);
  alert(`이름: ${userJson.name}.`);
}

demoGithubUser();