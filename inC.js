let mic;
let amp;
let fft;
let i;
let angle = 0;
let color;
let szH = 30;
let szW = 10;
let number = 20;

let flowers = [];
let flower = [];
class petal {
  constructor(x, y, szw, szh, color, angle) {
    this.x = x;
    this.y = y;
    this.szw = szw;
    this.szh = szh;
    this.color = color;
    this.angle = angle;
  }

  render() {
    noStroke();
    fill(this.color);
    push();
    rotate(this.angle);
    ellipse(this.x, this.y, this.szw, this.szh);
    pop();
  }
}

function setup() {
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

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  background(220);
  let vol = mic.getLevel();
  let spectrum = fft.analyze();

  if (flower.length == 0) {
    i = 0;
    angle = 0;
    flowers[flowers.length] = flower;
    szH += 30;
    szW += 5;
    number += 20;
    //set size
  } else i = flower.length;
  var sz = map(vol, 0, 0.3, szH, szH + 20);
  var y = -szH / 2;
  
  //set color
  let index = spectrum.lastIndexOf(1);
  if (index / 255 > 3) {
    flower[i] = new petal(0, y, szW, sz, (index, 0, 250 - index), angle);    flower[i].color = (index % 255, 0, 250 - index % 255);
    print(flower[i].color);
  } else if (index / 225 > 2) {
    flower[i] = new petal(0, y, szW, sz, 0, angle);
    flower[i].color = (0, index % 255, 250 - index % 255);
    print(flower[i].color);
  } else {
    flower[i] = new petal(0, y, szW, sz, (0, 0, index % 255), angle);
    flower[i].color = (0, 0, index % 255);
    print(flower[i].color);
  }
  angle += ((360 / number) * szW) / 10;
  if (angle > 360) {
    flower = [];
  }
  for (let l = flowers.length - 1; l >= 0; l--)
    for (let flo of flowers[l]) {
      flo.render();
      //print(flo.color);
    }
  noStroke();
  fill(255, 255, 0);
  ellipse(0, 0, 20, 20);
  pop();
}