function setup() {
    createCanvas(windowWidth, windowHeight);
    
    angleMode(DEGREES);
    rectMode(CENTER);
  }
  
  function draw() {
    background(220);
    noFill();
    stroke(255);
    
    translate(width / 2, height / 2);
    
    for (let i = 0; i< 200; i++){
      push();
      
      rotate(sin(frameCount + i) * 100);
      
      let r = map(sin(frameCount), -1, 1, 50, 255);
      let g = map(cos(frameCount), -1, 1, 50, 255)
      let b = map(sin(frameCount / 4), -1, 1, 50, 255);
      
      rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
      
      pop()
    }
  }