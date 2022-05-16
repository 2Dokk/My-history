let formResolution = 15;
let stepSize = 2;
let radius = 150;
let centerX;
let centerY;
let x = [];
let y = [];
let freeze = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // init shape
  centerX = width / 2;
  centerY = height / 2;
  let angle = random(PI);
  let x1 = cos(angle) * radius;
  let y1 = sin(angle) * radius;
  let x2 = cos(angle - PI) * radius;
  let y2 = sin(angle - PI) * radius;
  for (let i = 0; i < formResolution; i++) {
    x[i] = lerp(x1, x2, i / formResolution);
    y[i] = lerp(y1, y2, i / formResolution);
  }
  stroke(0, 50);
  strokeWeight(0.75);
  noFill();
  background(255);
}
function draw() {
  // floating towards mouse position centerX += (mouseX - centerX) * 0.01; centerY += (mouseY - centerY) * 0.01;
  // calculate new points for (let i = 0; i < formResolution; i++) { x[i] += random(-stepSize, stepSize); y[i] += random(-stepSize, stepSize); }
  translate(centerX, centerY);
  beginShape();
  // first controlpoint curveVertex(x[0], y[0]);
  // only these points are drawn for (let i = 0; i < formResolution; i++) { curveVertex(x[i], y[i]); } curveVertex(x[i], y[i]);
  endShape();
}
function mousePressed() {
  // init shape on mouse position
  centerX = mouseX;
  centerY = mouseY;
  var angle = random(PI);
  var x1 = cos(angle) * radius;
  var y1 = sin(angle) * radius;
  var x2 = cos(angle - PI) * radius;
  var y2 = sin(angle - PI) * radius;
  for (let i = 0; i < formResolution; i++) {
    x[i] = lerp(x1, x2, i / formResolution);
    y[i] = lerp(y1, y2, i / formResolution);
  }
}
function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}
// pause/play draw loop if (key == 'f' || key == 'F') freeze = !freeze; if (freeze) { noLoop(); } else { loop(); } }
