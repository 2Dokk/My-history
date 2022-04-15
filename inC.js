var volhistory = [];
let mic;
let colorArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  var vol = mic.getLevel();
  print(vol);
  volhistory.push(vol);
  colorArray.push(map(vol,0.0002,0.09,0,255))
  noStroke();
  let fillColor = (0,Math.max(colorArray),Math.max(colorArray));
  print(Math.max(colorArray));
  fill(fillColor);
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i) * 10;
    var y = r * sin(i) * 10;
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  
  if (colorArray.length > 30) {
    colorArray.shift();
  }
}