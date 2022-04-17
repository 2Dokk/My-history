let mic;
let amp;
let fft;
let i;
let angle = 0;
let color;
let szH = 30;
let szW = 10;
let number = 20;
let r, g, b;

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
    flower[i] = new petal(
      0,
      y,
      szW,
      sz,
      index % 255,
      0,
      250 - (index % 255),
      angle
    );
  } else if (index / 225 > 2) {
    flower[i] = new petal(
      0,
      y,
      szW,
      sz,
      0,
      index % 255,
      250 - (index % 255),
      angle
    );
  } else {
    flower[i] = new petal(0, y, szW, sz, 0, 0, index % 255, angle);
  }
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
}
