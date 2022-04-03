function setup() {
  createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(0);
    randomSeed(0);
    strokeWeight(3);
    var x, y;
    var delta = map(mouseX, 0, windowWidth, 10, 100);
    for (y=0; y<windowHeight; y+=delta) {
      for (x=0; x<windowWidth; x+=delta) {
        var r = random(0, 1);
        if (r < 0.5) {
          var cX = map(x, 0, windowWidth, 0, 255);
          var cY = map(y, 0, windowHeight, 0, 255);
          stroke(cX,0,cY);
          line(x, y, x+delta, y+delta);
        } else {
          var cX = map(x, 0, windowWidth, 0, 255);
          var cY = map(y, 0, windowHeight, 0, 255);
          stroke(cX,0,cY);
          line(x+delta, y, x, y+delta);
        }
      }
    }
  }