"use strict";
function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

function spy(func){
    let cache = new Map();
    function hash(args){
        return args[0]+','+args[1];
    }
    return function(x){
        let key = hash(arguments);
        if (cache.has(key)){
            return cache.get(key);
        }
        let result = func.call(this,...arguments);
        cache.set(key,result);
        return result;

    };
}