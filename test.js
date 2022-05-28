let message = "A  River  Runs  Through  It";

let messageX;
const xSpeed = 3;
const ySpeed = 0.015;
let amplitude = 100;
const verticalLetterSpacing = 200;
let font;

function preload() {
  font = loadFont("./font/AlexBrush-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);

  messageX = width;
}

function draw() {
  background(255);

  textSize(100);
  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY =
      height / 2 + tan((frameCount - letterOffset) * ySpeed) * amplitude;
    noStroke();
    fill(50, 150, map(letterX, 0, windowWidth, 80, 240));

    text(message[i], letterX, letterY);
  }
  if (mouseIsPressed) {
    messageX -= xSpeed;
  } else {
    messageX = messageX;
  }

  if (messageX < -textWidth(message)) {
    messageX = width + 50;
  }

  textSize(24);
  fill(200);
}
