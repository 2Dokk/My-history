"use strict";
function checkSpam(str){
    str = str.toUpperCase()
    return (str.includes('VIAGRA') || str.includes('XXX'));
}
alert(checkSpam('free xxxxx'));
console.log(checkSpam('free xxxxx'));