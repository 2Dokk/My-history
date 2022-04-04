//declare Array 
var points = [];
mult = 0.005;
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(30);
  noiseDetail(1);
  var density = 10;
  var space = width / density;
  for (var x = 0; x < width; x += space){
    for (var y = 0; y < height; y += space){
      //Regularly generate coordinates within the iteration statement
      //The coordinates are spaced as much as "space"
      var p = createVector(x,y);
      //Then, put the coordinates into the previously created array
      points.push(p);
    }
  }
}
function draw(){
  for (var i =0; i< points.length; i++){
    //The color is determined using the x and y values of the coordinates and the location of the mouse
    var r = map(points[i].x, 0, mouseX, 50, 230);
    var g = map(points[i].y, 0, mouseX, 50, 230);
    var b = map(points[i].x, 0, mouseY, 255, 100); 
    fill(255);
    stroke(r,g,b); 
    //The angle is set between 0 and 720 according to the coordinates using the map function
    var angle = map(noise(points[i].x * mult, points[i].y * mult ), 0, 1, 0,720);
    //Sine and cosine values of the calculated angles are added to x,y of the corresponding points coordinates
    points[i].add(createVector(sin(angle), cos(angle)));
    //Draw ellipse on the updated coordinates
    ellipse(points[i].x, points[i].y , 5);
  }
}