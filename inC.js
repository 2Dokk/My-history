let mic;
let amp;
let fft;
let i;
let angle = 0;
let szH = 30;
let szW = 10;
let number = 20;
let r, g, b;
let snowColor = "snow";
let snowMode = "none";
let inputVoice = [];

let Rs, Gs, Bs, R, G, B;

let flowers = [];
let flower = [];

class petal {
  constructor(x, y, szw, szh, r, g, b, angle) {
    this.x = x;
    this.y = y;
    this.szw = szw;
    this.szh = szh;
    this.angle = angle;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  render() {
    noStroke();
    fill(this.r, this.g, this.b);
    push();
    rotate(this.angle);
    ellipse(this.x, this.y, this.szw, this.szh);
    pop();
  }
}

function setup() {
  frameRate(10);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

  amp = new p5.Amplitude();
  fft = new p5.FFT();
  fft.setInput(mic);

  randomSeed(50);

  button1 = createButton("CLEAR");
  button1.size(100, 50);
  button1.position(windowWidth - 100, windowHeight - 50);
  
  button2 = createButton("SNOW");
  button2.size(100, 50);
  button2.position(0, windowHeight - 50);

  /*
  button2 = createButton("COLOR");
  button2.size(100, 50);
  button2.position(0, windowHeight - 50);
  */
}

function draw() {
  let c1 = color(150, 230, 255);
  let c2 = color(255);
  setGradient(c1, c2);

  push();
  translate(windowWidth / 2, windowHeight / 2);
  let vol = mic.getLevel();
  let spectrum = fft.analyze();

  //print(spectrum);

  if (flower.length == 0) {
    i = 0;
    angle = 0;
    flowers[flowers.length] = flower;
    szH += 30;
    szW += 5;
    number += 20;
    Rs = random(200, 255);
    Gs = random(0, 150);
    Bs = random(200, 225);

    //set size
  } else i = flower.length;

  var y = -szH / 2;

  let R = map(vol, 0, 0.3, Rs, 256);
  let G = map(vol, 0, 0.3, Gs, 256);
  let B = map(vol, 0, 0.3, Bs, 256);

  flower[i] = new petal(0, y, szW, szH, R, G, B, angle);

  angle += ((360 / number) * szW) / 10;
  if (angle > 360) {
    flower = [];
  }
  for (let l = flowers.length - 1; l >= 0; l--)
    for (let flo of flowers[l]) {
      flo.render();
    }

  noStroke();
  fill(255, 255, 0);
  ellipse(0, 0, 20, 20);
  pop();

  if (snowColor == "cherry") fill(255, 200, 200);
  else fill(255);
  noStroke();

  for (let y = 0; y < height; y += 10) {
    let snowX = random(0, width);
    let snowSz = random(5, 15);
    ellipse(snowX, y, snowSz, snowSz);
  }

  button1.mouseClicked(flowerClear);
  button2.mouseClicked(changeSnowMode);
  
  if (snowMode == "start") {
    let result = 1000;
    let saveIndex = [];
    let savePoint = [];
    let indexValue = [];
    
    let checkIncline = true;
    let count = 0;

    let spectrum = fft.analyze();
    for (var i = 1; i < spectrum.length; i++) {
      if (spectrum[i] - spectrum[i - 1] >= 0) {
        checkIncline = true;
      } else if (spectrum[i] - spectrum[i - 1] < 0 && checkIncline == true) {
        checkIncline = false;
        savePoint.push(i - 1);
      } else {
        checkIncline = false;
      }
    }
    for (let i = 1; i < savePoint.length; i++) {
      let m = savePoint[i] - savePoint[i - 1];
      if (m < 5) {
        savePoint.splice(i, 1);
      }
    }
    for (let i = 0; i < savePoint.length; i++) {
      indexValue.push(spectrum[savePoint[i]]);
    }
    for (let i = 0; i < 5; i++) {
      let max = Math.max(...indexValue);
      let ind = indexValue.indexOf(max);
      indexValue.filter((v) => v !== max);
      saveIndex.push(savePoint[ind]);
      savePoint.splice(ind, 1);
    }
    saveIndex.sort(function (a, b) {
      return a - b;
    });
    for (let i = 1; i < 5; i++) {
      if (abs(saveIndex[i] - saveIndex[i - 1]) < result) {
        result = abs(saveIndex[i] - saveIndex[i - 1]);
      }
    }
    print(result);
    inputVoice.push(result);
    if (inputVoice.length > 30) {
      snowMode = "none";
      print(inputVoice);
    }
    inputVoice.map((item) => {
      if (item >= 8) {
        count++;
      }
    });
    if (count >= 5) {
      snowColor = "snow";
    } else {
      snowColor = "cherry";
    }
  }
}

function flowerClear() {
  flowers = [];
  szH = 30;
  szW = 10;
  number = 20;
  angle = 360;
}

function changeSnowMode() {
  snowMode = "start";
  inputVoice = [];
}

function setGradient(c1, c2) {
  // set the gradient
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}