const max_planets = 100;
const max_rainDrops = 100;
let planets = [];
let rainDrops = [];

let backgroundMode = "none";
function Planet(x, y, vx, vy, sz, c) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.sz = sz;
  this.c = c;
  this.move = function() {
// uniform velocity motion s_next = s_prev + v*t
    this.x += this.vx;
    this.y += this.vy;
  if (this.x<0 || this.x>windowWidth) this.vx = - this.vx;
if (this.y<0 || this.y>windowHeight)     this.vy = -this.vy;
if (this.y<10) this.y = 3
}
this.render = function() {
noStroke();
fill(this.c);
ellipse(this.x, this.y, this.sz, this.sz);
}
}

class rainDrop{
  constructor(x,y,vy,sz,c){
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.sz = sz;
    this.c = c;
  }
  move(){
    this.y += this.vy;
    if (this.y > windowHeight) this.y = 0;
  }
  render(){
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 2, this.sz);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<max_planets; i++) {
    planets[i] = new Planet(
    random(0, windowWidth), random(0, windowHeight), random(-3, 3), random(-3, 3),
random(30, 100), color(random(230,255),random(230,255) ,random(230,255)) );
}
  for (let i = 0; i < max_rainDrops; i++){
    rainDrops[i] = new rainDrop(
      random(0,windowWidth), random(0, windowHeight), random(30,100), random(30,100), color(random(100,255)));
  }
}

function draw() {
  if (backgroundMode == "none"){
    background(163,230,250);
  } else {
    background(50);
    for (let drop of rainDrops){
      drop.move();
      drop.render();
    }
  }
  for (let i=0; i<max_planets; i++) {
    planets[i].move();
    planets[i].render();
}
  if (mouseIsPressed === true){
    backgroundMode = "rain";
    for (var i = 0; i<max_planets; i++){
      planets[i].c = color(40);
    
    }
  }
}