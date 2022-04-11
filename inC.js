const max_planets = 1000;
const max_rainDrops = 500;
let planets = [];
let rainDrops = [];

let backgroundMode = "none";
function Planet(x, y, vx, vy, sz, c) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.sz = sz;
  this.c = c;
  this.move = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > windowWidth) this.vx = -this.vx;
    if (this.y < 0 || this.y > windowHeight) this.vy = -this.vy;
    if (this.y < 10) this.y = 3;
  };
  this.render = function () {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.sz, this.sz);
  };
}

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
  }
  render() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 2, this.sz);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < max_planets; i++) {
    planets[i] = new Planet(
      random(0, windowWidth),
      random(0, windowHeight),
      random(-3, 3),
      random(-1, -3),
      random(50, 200),
      color(random(230, 255), random(230, 255), random(230, 255))
    );
  }
  for (let i = 0; i < max_rainDrops; i++) {
    rainDrops[i] = new rainDrop(
      random(0, windowWidth),
      random(0, windowHeight),
      random(30, 100),
      random(30, 100),
      color(random(100, 255))
    );
  }
}

function draw() {
  if (backgroundMode == "none") {
    background(163, 230, 250);
  } else {
    background(50);
    for (let drop of rainDrops) {
      drop.move();
      if (backgroundMode == "umb") {
        if (
          drop.x < windowWidth / 2 + 130 &&
          drop.x > windowWidth / 2 - 130 &&
          drop.y > windowHeight - windowHeight / 3
        ) {
          continue;
        } else drop.render();
      } else {
        drop.render();
      }
    }
  }
  for (let i = 0; i < max_planets; i++) {
    planets[i].move();
    planets[i].render();
  }
  if (backgroundMode == "umb") {
    fill(0);
    beginShape();
    vertex(windowWidth / 2 - 10, windowHeight);
    vertex(windowWidth / 2 - 10, windowHeight - windowHeight / 4);
    vertex(windowWidth / 2 - 130, windowHeight - windowHeight / 4);
    vertex(windowWidth / 2 - 140, windowHeight - windowHeight / 3);
    vertex(windowWidth / 2 - 110, windowHeight - windowHeight / 3 - 50);
    vertex(windowWidth / 2 - 90, windowHeight - windowHeight / 3 - 70);
    vertex(windowWidth / 2 - 40, windowHeight - windowHeight / 3 - 110);
    vertex(windowWidth / 2 - 10, windowHeight - windowHeight / 3 - 120);
    vertex(windowWidth / 2 + 10, windowHeight - windowHeight / 3 - 120);
    vertex(windowWidth / 2 + 40, windowHeight - windowHeight / 3 - 110);
    vertex(windowWidth / 2 + 90, windowHeight - windowHeight / 3 - 70);
    vertex(windowWidth / 2 + 110, windowHeight - windowHeight / 3 - 50);
    vertex(windowWidth / 2 + 140, windowHeight - windowHeight / 3);
    vertex(windowWidth / 2 + 130, windowHeight - windowHeight / 4);
    vertex(windowWidth / 2 + 10, windowHeight - windowHeight / 4);
    vertex(windowWidth / 2 + 10, windowHeight);
    endShape(CLOSE);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (backgroundMode == "none") {
      backgroundMode = "rain";
      for (var i = 0; i < max_planets; i++) {
        planets[i].c = color(random(0, 50));
      }
    } else if (backgroundMode == "rain") {
      backgroundMode = "umb";
    } else if (backgroundMode == "umb") {
      backgroundMode = "none";
      for (var i = 0; i < max_planets; i++) {
        planets[i].c = color(
          random(230, 255),
          random(230, 255),
          random(230, 255)
        );
      }
    }
  }
}
