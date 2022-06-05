//main
let weatherData;
let region = "London";
let weather;
let state = "Loading";
let key = "f9158de9c3b2485ba53191533220406";
let url;

//Wind
let fontWind, puntiTesto;
let vertici = [];
let testo = region;
const grandezzaFont = 180;
const direzioneVento = 0.003;
const lunghezzaFilamenti = 30;

function preload() {
  fontWind = loadFont("Eina04-BoldItalic.ttf");
  url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => (weather = data.current.condition.text))
    .then(() => (state = "Done"))
    .catch((error) => console.log("error:", error));
}

function setup() {
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
  } else if (weather == "") {
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    print(weather);
    //region = prompt("어디 날씨가 궁금하신가요?", "");
    region = "Seoul";
    state = "Loading";
    url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => (weather = data.current.condition.text))
      .then(() => (state = "Done"))
      .catch((error) => console.log("error:", error));
    print(weather);
  }
  if (keyCode === UP_ARROW) {
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
    }
  }
}
