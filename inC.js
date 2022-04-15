var volhistory = [];
let mic;
let colorArray = [];
let condArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  var vol = mic.getLevel();
  volhistory.push(vol);
  noStroke();
  print(vol);
  if (vol>0.01){
    colorArray.push(map(vol,0.001,0.01,100,255));
    condArray.push("blue");
  } else if(vol > 0.1){
            colorArray.push(map(vol,0.01,0.1,100,255));
    condArray.push("green");
            }else if(1){
                     colorArray.push(map(vol,0.1,1,100,255));
              condArray.push("red");
                     }
  if (condArray.includes("red")){
     let index = condArray.indexOf("red");
    fill(colorArray[index],0,0);
     fill(0,Math.max(...colorArray),Math.max(...colorArray));
  } else if (condArray.includes("green")){
    let index = condArray.indexOf("green");
    fill(0,colorArray[index],0);
    fill(0,Math.max(...colorArray),Math.max(...colorArray));  
             } else { fill(0,0,Math.max(...colorArray));
}
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i) * 10;
    var y = r * sin(i) * 10;
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  
  if (colorArray.length > 40) {
    colorArray.shift();
  }
    if (condArray.length > 40) {
    condArray.shift();
  }
}