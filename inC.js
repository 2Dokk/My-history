let weatherData;
let region = "London";
let weather;
let state = "Loading";
let key = "037e877babc2441ebbe170923220406";
let url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
function preload() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (weather = data.current.condition.text))
    .then(() => (state = "Done"))
    .catch((error) => console.log("error:", error));
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(220);
  if (weather == "Sunny") {
  }

  if (state == "Loading") {
  } else if (state == "Done") {
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    region = prompt("어디 날씨가 궁금하신가요?", "");
    state = "Loading";
    url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => (weather = data.current.condition.text))
      .then(() => (state = "Done"))
      .catch((error) => console.log("error:", error));
    console.log(weather);
  }
}
