var angle;
let img;

function preload() {
  img = loadImage("moon.jpg");
}
function setup() {
  createCanvas(1024, 1369);
  background(img);
}

function draw() {
  angle = 50;
  translate(mouseX, mouseY);
  mindul(100);
}

function mindul(len) {
  stroke(map(len, 100, 0, 0, 250));
  strokeWeight(0.03);
  line(0, 0, 0, -10);
  translate(0, -10);
  if (len > 10) {
    push();
    rotate(angle);
    mindul(len * 0.75);
    pop();
    push();
    rotate(-angle);
    mindul(len * 0.75);
    pop();
  }
}
