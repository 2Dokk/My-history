"use strict";
let animal = {
    eats: true
};

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal

let rabbit = new Rabbit("흰토끼");
alert(rabbit.eats);