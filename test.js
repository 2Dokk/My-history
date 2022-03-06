"use strict";
function loadScript(src) {
    // <script> 태그를 만들고 페이지에 태그를 추가합니다.
    // 태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행합니다.
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }
  