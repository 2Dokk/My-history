"use strict";
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let copyOrigin = arr.slice()
    copyOrigin.sort();
    return copyOrigin;
}

let sorted = copySorted(arr);
console.log(copySorted(arr));

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)