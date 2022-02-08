"use strict";
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // 배열의 각 요소를
      partialSum += item; // partialSum에 더합니다.
      maxSum = Math.max(maxSum, partialSum); // 최대값을 기억해 놓습니다.
      if (partialSum < 0) partialSum = 0; // 음수가 되면 0을 대입합니다.
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0