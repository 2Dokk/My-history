var volhistory = [];
let mic, fft;
let colorArray = [];
let condArray = [];
let mode = "volume";

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);
  if (mode === "volume"){
  var vol = mic.getLevel();
  volhistory.push(vol);
  noStroke();
if (vol> 0.1) {
    colorArray.push(map(vol, 0.01, 0.3, 50, 255));
    condArray.push("red");
  }else if (vol > 0.01) {
    colorArray.push(map(vol, 0.001, 0.1, 50, 255));
    condArray.push("green");
  } else if (vol > 0.001) {
    colorArray.push(map(vol, 0.0001, 0.01, 50, 255));
    condArray.push("blue");
  } 
  if (condArray.includes("red")) {
    let index = condArray.indexOf("red");
    fill(colorArray[index], 0, 250 - colorArray[index]);
  } else if (condArray.includes("green")) {
    let index = condArray.indexOf("green");
    fill(0, colorArray[index],250- colorArray[index]);
  } else {
      let index = condArray.indexOf("blue");
    fill(0,0,colorArray[index]);
  }
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

  if (colorArray.length > 20) {
    colorArray.shift();
  }
  if (condArray.length > 20) {
    condArray.shift();
  }
} else if(mode == "frequency"){
  let spectrum = fft.analyze();
  ellipse(width / 2, height / 2,200,200);
  }
}

function keyPressed() {
  if (keyCode === ENTER){
    if (mode == "volume"){
      mode = "frequency";
    } else {
      mode = "volume";
    }
  }
}