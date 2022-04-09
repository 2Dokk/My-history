const max_planets = 100;
let planets = [];
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
if (this.x<0 || this.x>windowWidth) this.vx = -this.vx;
if (this.y<0 || this.y>windowHeight)     this.vy = -this.vy;
if (this.y<0) this.y = -5
}
this.render = function() {
noStroke();
fill(this.c);
ellipse(this.x, this.y, this.sz, this.sz);
}
}

function setup() {
createCanvas(windowWidth, windowHeight);
for (let i=0; i<max_planets; i++) {
planets[i] = new Planet(
random(0, windowWidth), random(0, windowHeight),
random(-2, 2), random(-2, 2),
random(30, 100), color(random(230,255),random(230,255) ,random(230,255)) );
}
}

function draw() {
  if (backgroundMode == "none"){
    background(163,230,250);
  } else {
    background(50);
  }
  for (let i=0; i<max_planets; i++) {
    planets[i].move();
    planets[i].render();
}
  if (mouseIsPressed === true){
    backgroundMode = "rain";
    for (var i = 0; i<max_planets; i++){
      planets[i].c = color(40)
    }
  }
}