"use strict";
function objConst(){
    alert('!');
}
let obj = new objConst();
let obj2 = new obj.constructor();