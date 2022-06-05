//main
let weatherData;
let region = "London";
let weather;
let state = "Loading";
const key = "c7fbc18b56b9403485a84850220506";
let url;
let data;

//Rainy
var bdX = []; //빌딩 X위치
var B = 0; //빌딩 위치 초기값
var bdY = []; //빌딩 Y위치
var bdX2 = []; //빌딩2 X위치
var bdY2 = []; //빌딩2 Y위치
var B2 = 0; //빌딩2 위치 초기값

var rainX = []; //비 X위치
var rainY = []; //비 Y위치
var rainYdir; // 비 이동

let diam = 40; // 해크기

let cloudXdir = []; //구름 이동
let cloudX = []; // 구름 X위치
let cloudY = []; // 구름 Y위치

let movers = [];
let axis;
let list = [];
let font;
let count, max;
let bright;
let typedKey = region;
let img;

//Wind
let fontWind, puntiTesto;
let vertici = [];
let testo = region;
const grandezzaFont = 180;
const direzioneVento = 0.003;
const lunghezzaFilamenti = 30;

//
function preload() {
  fontWind = loadFont("Eina04-BoldItalic.ttf");
  fontRain = loadFont("FreeSansBold.ttf");
  url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
  data = loadJSON(url);
}

function setup() {
  console.log(data);
  weather = data.current.condition.text;
  console.log(weather);
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  noStroke();

  //Wind
  //ricavare i vertici
  let punti = fontWind.textBounds(testo, 0, 0, grandezzaFont);
  puntiTesto = fontWind.textToPoints(
    testo,
    centerX - punti.w / 2,
    centerY + punti.h / 2,
    grandezzaFont
  );
  for (let i = 0; i < puntiTesto.length; i++) {
    vertici.push(createVector());
  }

  //Rain
  createCanvas(800, 600);
  background(5, 10, 100);
  strokeCap(ROUND);
  strokeWeight(11);
  frameRate(60);
  bright = 100;
  movers = [];
  count = 0;
  max = 500;
  img = createImage(800, 600);
  textFont(font);
  textSize(200);
  fill(0);
  textAlign(CENTER, CENTER);
  text(typedKey, width / 2, height / 2 - 50);
  list = [width * height];
  img.loadPixels();
  for (let y = 0; y <= img.height - 1; y++) {
    for (let x = 0; x <= img.width - 1; x++) {
      let pb = get(x, y);
      if (red(pb) < 5) {
        list[y * width + x] = 0;
      } else {
        list[y * width + x] = 1;
      }
    }
  }
  img.updatePixels();
  background("#FFFAF5");

  // create builing 1 & 2
  for (var i = 0; i < 16; i++) {
    bdX[i] = B;
    bdY[i] = random(310, 380);
    B += 60;
  }
  for (var i = 0; i < 18; i++) {
    bdX2[i] = B2;
    bdY2[i] = random(360, 500);
    B2 += 80;
  }
  // create rain
  for (var i = 0; i < 150; i++) {
    rainX[i] = random(width);
    rainY[i] = random(height);
  }
  rainYdir = 2;
  // create cloud
  for (var i = 0; i < 20; i++) {
    cloudX[i] = random(width);
    cloudY[i] = random(0, 50);
    cloudXdir[i] = random(1, 2);
  }
}

function draw() {
  if (state == "Loading") {
    background(0);
  } else if (state == "Done") {
    background(255);
  }
  if (weather == "Wind") {
    let dimensione = min(width, height) / 500;
    translate(centerX, centerY);
    scale(dimensione);
    translate(-centerX, -centerY);
    let grandezzaPuntini = 4.5;

    const rotazione = map(0, 0, width, 4, 12) * PI;
    const lunghezza = map(0, 0, height, 1.2, 1);
    const tempo = millis() / 3000;

    sfumatura = 0;

    for (let i = 0; i < puntiTesto.length; i++) {
      vertici[i].x = puntiTesto[i].x;
      vertici[i].y = puntiTesto[i].y;
    }

    for (let i = 0; i < lunghezzaFilamenti; i++) {
      grandezzaPuntini *= 0.98;
      for (let i = 0; i < vertici.length; i++) {
        let angolazione =
          noise(
            vertici[i].x * direzioneVento,
            vertici[i].y * direzioneVento,
            tempo
          ) * rotazione;
        let v = p5.Vector.fromAngle(angolazione, lunghezza);
        vertici[i].x += v.x;
        vertici[i].y += v.y;
        sfumatura += 0.02;
        fill(0, sfumatura, 255, 50);
        circle(vertici[i].x, vertici[i].y, grandezzaPuntini);
      }
    }
  } else if (weather == "Rain") {
    if (count < max) {
      let i = 0;
      while (i < 1) {
        axis = createVector(
          int(random(100, width - 100)),
          int(random(100, height - 100))
        );
        if (list[int(axis.y * width + axis.x)] == 0) {
          movers.push(new Mover(bright, axis.x, axis.y));
          if (bright > 20) bright -= 0.2;
          i++;
          count++;
        }
      }
    }

    background("#333333");
    for (let i = movers.length - 1; i > 0; i--) {
      let m = movers[i];
      m.update();
      m.display();
    }

    //background
    //RAINY DAY

    //backgroundcolor(2);

    //buildng
    for (var i = 0; i < 16; i++) {
      building(bdX[i], bdY[i], 2);
    }
    for (var i = 0; i < 18; i++) {
      building2(bdX2[i], bdY2[i], 2);
    }

    // rain
    for (var i = 0; i < 150; i++) {
      rain(rainX[i], rainY[i]);
      rainY[i] += rainYdir;
      if (rainY[i] >= height) {
        rainY[i] = 0;
        rainX[i] = random(width);
      }
    }

    // cloud
    for (var i = 0; i < 20; i++) {
      cloud(cloudX[i], cloudY[i], 1);
      cloudX[i] += cloudXdir[i];
      if (cloudX[i] > width - 50) {
        cloudX[i] = 0;
      }
    }

    frame();
  }
}

//Rain

class Mover {
  constructor(br, x, y) {
    this.xx = x;
    this.yy = y;
    this.location = createVector(x, y);
    this.initialPoint = createVector(x, y);
    this.velocity = createVector(2, -1);
    this.brightness = br;
    this.hue = 29;
    this.strokeW = 2;
  }

  display() {
    strokeWeight(this.strokeW);
    stroke(255);
    line(
      this.initialPoint.x,
      this.initialPoint.y,
      this.location.x,
      this.location.y
    );
  }

  update() {
    this.location.add(this.velocity);
    if (
      list[this.location.y * width + this.location.x] == 1 &&
      random(10) < 5
    ) {
      this.velocity = createVector(0, 0);
    }
  }

  reset() {
    let j = 0;
    while (j < movers.size()) {
      axis = createVector(random(100, width - 100), random(100, height - 100));
      if (list[int(axis.y * width + axis.x)] == 0) {
        this.location.set(axis);
        this.initialPoint.set(axis);
        j++;
      }
    }
  }
}

//functions

function backgroundcolor(X) {
  if (X == 1) {
    for (var i = 0; i <= height; i++) {
      stroke(255, 255 - i / 2, 0);
      line(0, i, width, i);
    }
  } else {
    for (var i = 0; i <= height; i++) {
      stroke(80, 255 - i / 2, 255);
      line(0, i, width, i);
    }
  }
}

function frame() {
  stroke(0);
  fill(255, 244, 150);
  rect(0, height - 50, 800, 50);
  stroke(81, 83, 124);
}

function building(X, Y, Z) {
  if (Z == 1) {
    stroke(0, 70);
    fill(85, 15, 15, 70);
    rect(X, Y, 60, 500, 3);
  } else {
    stroke(0, 70);
    fill(201, 203, 217, 70);
    rect(X, Y, 60, 500, 3);
  }
}
function building2(X, Y, Z) {
  if (Z == 1) {
    stroke(0, 255);
    fill(85, 15, 15, 255);
    rect(X, Y, 80, 500, 3);
  } else {
    stroke(0, 255);
    fill(52, 0, 106, 255);
    rect(X, Y, 80, 500, 3);
  }
}

function cloud(X, Y, Z) {
  if (Z == 1) {
    noStroke();
    fill(233, 233, 235, 206);
    ellipse(X - 10, Y, 350, 300);
  } else if (Z == 2) {
    noStroke();
    fill(255, 255, 255, 30);
    ellipse(X, Y, 300, 100);
  }
}

function rain(X, Y) {
  noStroke();
  fill(203);
  rect(X, Y, 2, 35);
}

function sun() {
  noStroke();
  fill(237, 143, 30);
  ellipse(700, 110, diam, diam);
  diam += 1;
  if (diam >= 100) {
    diam = 10;
  }
  fill(255, 0, 0, 60);
  ellipse(700, 110, 70, 70);
}

//main

function keyPressed() {
  if (keyCode === ENTER) {
    print(weather);
    region = prompt("어디 날씨가 궁금하신가요?", "Seoul");
    state = "Loading";
    url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
    data = loadJSON(url);
  }
  if (keyCode === UP_ARROW) {
    //Update
    state = "Done";
    typedKey = region;
    weather = data.current.condition.text;
    console.log(region, weather);
    if (weather == "Wind") {
      testo = region;
      let punti = fontWind.textBounds(testo, 0, 0, grandezzaFont);
      puntiTesto = fontWind.textToPoints(
        testo,
        centerX - punti.w / 2,
        centerY + punti.h / 2,
        grandezzaFont
      );
      for (let i = 0; i < puntiTesto.length; i++) {
        vertici.push(createVector());
      }
    } else if (weather == "Rain") {
      createCanvas(800, 600);
      background(5, 10, 100);
      strokeCap(ROUND);
      strokeWeight(11);
      frameRate(60);
      bright = 100;
      movers = [];
      count = 0;
      max = 500;
      img = createImage(800, 600);
      textFont(font);
      textSize(200);
      fill(0);
      textAlign(CENTER, CENTER);
      text(typedKey, width / 2, height / 2 - 50);
      list = [width * height];
      img.loadPixels();
      for (let y = 0; y <= img.height - 1; y++) {
        for (let x = 0; x <= img.width - 1; x++) {
          let pb = get(x, y);
          if (red(pb) < 5) {
            list[y * width + x] = 0;
          } else {
            list[y * width + x] = 1;
          }
        }
      }
      img.updatePixels();
      background("#FFFAF5");

      // create builing 1 & 2
      for (var i = 0; i < 16; i++) {
        bdX[i] = B;
        bdY[i] = random(310, 380);
        B += 60;
      }
      for (var i = 0; i < 18; i++) {
        bdX2[i] = B2;
        bdY2[i] = random(360, 500);
        B2 += 80;
      }
      // create rain
      for (var i = 0; i < 150; i++) {
        rainX[i] = random(width);
        rainY[i] = random(height);
      }
      rainYdir = 2;
      // create cloud
      for (var i = 0; i < 20; i++) {
        cloudX[i] = random(width);
        cloudY[i] = random(0, 50);
        cloudXdir[i] = random(1, 2);
      }
    }
  }
}
