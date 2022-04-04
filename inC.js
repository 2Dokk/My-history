var points = [];
mult = 0.005;
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(30);
  //angleMode(DEGREES);
  noiseDetail(1);
  
  var density = 10;
  var space = width / density;
  
  for (var x = 0; x < width; x += space){
    for (var y = 0; y < height; y += space){
      var p = createVector(x,y);
      points.push(p);
    }
  }

}

function draw(){
  noStroke();
  fill(255);
  
  for (var i =0; i< points.length; i++){
    var r = map(points[i].x, 0, mouseX, 50, 230);
    var g = map(points[i].y, 0, mouseX, 50, 230);
    var b = map(points[i].x, 0, mouseY, 255, 100);
    
    fill(255);
    stroke(r,g,b);
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult ), 0, 1, 0,720);
    
    points[i].add(createVector(sin(angle), cos(angle)));
    
    ellipse(points[i].x, points[i].y , 5);
  }
}