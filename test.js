"use strict";
function unique(arr) {
    /* 제출 답안 */
    let result = new Set()
    for (let item of arr){
        result.add(item);
    }
    return Array.from(result);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.