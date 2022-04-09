const max_rainDrops = 1000;
let rainDrops = [];
let rainSound;
class rainDrop {
constructor(x, y, vy, sz, c) {
this.x = x;
this.y = y;
this.vy = vy;
this.sz = sz;
this.c = c;
}
move() {
this.y += this.vy;
if (this.y > windowHeight) this.y = 0;
if (mouseIsPressed) {
let xdif = abs(this.x - mouseX);
if (xdif < 100 + random(-100, 100)) {
if ((this.y - mouseY) > random(-100, 100)) {
this.y = 0;
}
}
}
}
render() {
noStroke();
fill(this.c);
ellipse(this.x, this.y, 2, this.sz);
}
}
function preload() {
rainSound = loadSound('rain_inside_house.mp3');
}
function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < max_rainDrops; i++) {
rainDrops[i] = new rainDrop(
random(0, windowWidth), random(0, windowHeight),
random(30, 100),
random(30, 100), color(random(100, 255)));
}
}
function draw() {
background(0);
for (let drop of rainDrops) {
drop.move();
drop.render();
}
}