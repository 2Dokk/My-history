function setup() {
  createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(255);
    randomSeed(0);
    let x, y, r;
    let delta = 50;
    let backSlashProb = map(mouseX, 0, windowWidth, 0,1);
    let backSlashThickness = map(mouseY, 0, windowHeight,
  3,30);
    for (y=0; y<windowHeight; y+=delta) {
      for (x=0; x<windowWidth; x+=delta) {
        r = random(0, 1);
        if (r < backSlashProb) {
          stroke(x, 0, y);
          strokeWeight(backSlashThickness);
          line(x, y, x+delta, y+delta);
        } else {
          stroke(0);
          strokeWeight(1);
          line(x+delta, y, x, y+delta);
        }
      }
    }
    // stroke(255);
    // strokeWeight(1);
    // beginShape();
    // vertex(windowWidth/2-30,windowHeight);
    // vertex(windowWidth/2-30,windowHeight-300);
    // vertex(windowWidth/2-100,windowHeight-200);
    // vertex(windowWidth/2-150,windowHeight-250);
    // vertex(windowWidth/2-30,windowHeight-300);
    // vertex(windowWidth/2-30,windowHeight-300);
    // vertex(windowWidth/2-30,windowHeight-300);
    // vertex(windowWidth/2+30,windowHeight-300);
    // vertex(windowWidth/2+30,windowHeight);
    // endShape();
  }