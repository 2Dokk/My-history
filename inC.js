/* eslint-disable no-undef, no-unused-vars */

// Tweakable parameters
const SNOW_COLOR = "snow";
const SNOWFLAKES_PER_LAYER = 200;
const MAX_SIZE = 10;
const GRAVITY = 0.75;
const LAYER_COUNT = 4;

const SKY_COLOR = "#B1E8FF";
const SKY_SPACE = 0.4;

const WIND_SPEED = 1;
const WIND_CHANGE = 0.0025;

const SUN_COLOR = "#FFF2AD";
const SUN_GLOW = 100;
const SUN_RADIUS = 150;

const RIDGE_TOP_COLOR = "#BCCEDD";
const RIDGE_BOT_COLOR = "#7E9CB9";
const RIDGE_STEP = 4;
const RIDGE_AMP = 250;
const RIDGE_ZOOM = 0.005;

const SNOWFLAKES = [];

function setup() {
    createCanvas(1080, 1350);
    fill(SNOW_COLOR);
    noStroke();
    // Initialize the snowflakes with random positions
    for (let l = 0; l < LAYER_COUNT; l++) {
        SNOWFLAKES.push([]);
        for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
          SNOWFLAKES[l].push({
            //x: random(width),
            //y: random(height),
            //mass: random(0.75, 1.25),
            l: l + 1
          });
        }
      }
}
function draw() {
    background(SKY_COLOR);
    const skyHeight = round(height * SKY_SPACE);
    drawSun(width / 2, skyHeight - RIDGE_AMP / 2);
  
    // Iterate through the layers of snowflakes
    for (let l = 0; l < SNOWFLAKES.length; l++) {
      const SNOWLAYER = SNOWFLAKES[l];
  
      // Draw a ridge for each layer of snow
      const layerPosition = l * ((height - skyHeight) / LAYER_COUNT);
      drawRidge(l, skyHeight + layerPosition);
      
    }
  }
  // Draw a simple sun
function drawSun(x, y) {
    fill(SUN_COLOR);
    drawingContext.shadowBlur = SUN_GLOW;
    drawingContext.shadowColor = SUN_COLOR;
    circle(x, y, SUN_RADIUS * 2);
    drawingContext.shadowBlur = 0;
  }
function drawRidge(l, y) {
    // Choose a color for the ridge based on its height
    const FILL = lerpColor(
      color(RIDGE_TOP_COLOR),
      color(RIDGE_BOT_COLOR),
      l / (LAYER_COUNT - 1)
    );
    fill(FILL);
  
    beginShape();
    // Iterate through the width of the canvas
    for (let x = 0; x <= width; x += RIDGE_STEP) {
      const noisedY = noise(x * RIDGE_ZOOM, y);
      vertex(x, y - noisedY * RIDGE_AMP);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    fill(SNOW_COLOR);
  }