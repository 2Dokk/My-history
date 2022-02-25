"use strict";
function delay(f, ms) {

    return function(...args) {
      let savedThis = this; // store this into an intermediate variable
      setTimeout(function() {
        f.apply(savedThis, args); // use it here
      }, ms);
    };
  
  }