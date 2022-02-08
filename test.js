"use strict";
function getMaxSubSum(arr){
    let dptable = [[0]*arr.length];
    dptable[0] = arr[0];
    for (let i = 1; i<arr.length;i++){
        dptable[i] = Math.max(0,dptable[i-1]) + arr[i];
    
    return Math.max(dptable);
    }
}
console.log(alert(getMaxSubSum([-1, 2, 3, -9])));
alert(getMaxSubSum([-1, 2, 3, -9]));