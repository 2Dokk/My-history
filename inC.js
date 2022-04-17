var volhistory = [];
let mic, fft;
let colorArray = [];
let condArray = [];
let spectArray = [];
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
  let index = spectrum.lastIndexOf(1);
  if (index/255> 3){
    spectArray.push("red");
  } else if (index/225 > 2){
    spectArray.push("green");
  } else{
    spectArray.push("blue");
  }
  if (spectArray.includes("red")) {
    fill(index, 0, 250 - index);
  } else if (spectArray.includes("green")) {
    fill(0, index,250-index);
  } else {
    fill(0,0,index%255);
  }
  if (spectArray.length > 20) {
    spectArray.shift();
  }
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

let mic;
let amp;
let fft;
let i;
let angle = 0;
let randR;
let randG1, randG2;
let randB;
let szH = 30;
let szW = 10;
let number = 20;

let flowers = [];
let flower = [];
class petal
  {
    constructor(x, y, szw, szh, r, g, b, angle)
    {
      this.x = x;
      this.y = y;
      this.szw = szw;
      this.szh = szh;
      this.col = (r, g, b);
      this.angle = angle;
    }
    
    render()
    {
      noStroke();
      fill(this.col);
      push();
      rotate(this.angle);
      ellipse(this.x, this.y, this.szw, this.szh);
      pop();
    }
  }

function setup()
{
  frameRate(5);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  randomSeed(0);
}

function draw()
{
  push();
  translate(windowWidth / 2, windowHeight / 2);
  background(0);
  var vol = mic.getLevel()
  var spectrum = fft.analyze();
  
  if (flower.length == 0) 
  {
    i = 0;
    angle = 0;
    randR = random(0, 255);
    randB = random(0, 255);
    randG1 = random(50, 80);
    randG2 = random(235, 255);
    flowers[flowers.length] = flower;
    szH += 30;
    szW += 5;
    number += 20;
  }
  else i = flower.length;
  var sz = map(vol, 0, 0.3, szH, szH + 20);
  var y = - szH / 2;
  //set color
  let index = spectrum.lastIndexOf(1);
  if (index/255> 3){
      flower[i] = new petal(
    0, y, szW, sz, randR, map(idx, 0, 89, randG1, randG2), randB, angle
  );
  } else if (index/225 > 2){
      flower[i] = new petal(
    0, y, szW, sz, randR, map(idx, 0, 89, randG1, randG2), randB, angle
  );
  } else{
      flower[i] = new petal(
    0, y, szW, sz, randR, map(idx, 0, 89, randG1, randG2), randB, angle
  );
}
  angle += 360 / number * szW / 10;
  if (angle>360)
    {
      flower = [];
    }
  for (let l = flowers.length - 1; l >= 0; l--)
    for(let flo of flowers[l])
    {
      flo.render();
  }
  noStroke();
  fill(255, 255, 0);
  ellipse(0, 0, 20, 20);
  pop();
}