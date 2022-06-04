let weatherData;
let region = "London";
let weather;
function preload() {
  let url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=037e877babc2441ebbe170923220406&q=${region}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => (weather = data.current.condition.text))
    .then(() => console.log(weatherData))
    .catch((error) => console.log("error:", error));
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (keyCode === ENTER) {
    region = prompt("어디 날씨가 궁금하신가요?", "");
    console.log(weather);
  }
}
