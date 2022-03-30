let symmetry = 24;   
let angle = 360 / symmetry;
let clearButton, helpButton, sizeSlider;
let slider;
let shadow = false;
let changeMode = false;
let settingM = false;
let setX = 0;
let setY = 0;
let setMX = 0;
let setMY = 0;


function setup() { 
  createCanvas(848, 848);
  angleMode(DEGREES);
  background(230);
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);


  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);
  helpButton = createButton('help');
  helpButton.mousePressed(helpF);
}
function clearScreen() {
  background(230);
}

function helpF(){
  alert(`\nENTER: Kaleidoscopic drawing\nSHIFT: Applying effectiveness\nUP_ARROW: Set the center of the kaleidoscope\nDOWN_ARROW: Set the reflection frequency of the kaleidoscope`)
}

function draw() {
  translate(width / 2, height / 2);
  if (shadow){
    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = color(207, 7, 99);
  } else{
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = color(207, 7, 99);
  }
  if (changeMode){
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      translate(setX,setY);
      let mx = mouseX - width / 2 -setX;
      let my = mouseY - height / 2 - setY;
      let pmx = pmouseX - width / 2 - setMX;
      let pmy = pmouseY - height / 2 - setMY;

      if (mouseIsPressed) {
        for (let i = 0; i < symmetry; i++) {
          rotate(angle);
          let sw = sizeSlider.value();
          strokeWeight(sw);
          stroke(mouseX,mouseY,50);
          line(mx, my, pmx, pmy);
          push();
          scale(1, -1);

          line(mx, my, pmx, pmy);
          pop();
        }
      }
    }
  } else{
    if (mouseIsPressed) {
      let sw = sizeSlider.value();
      strokeWeight(sw);
      stroke(0);
      let mx = mouseX - width / 2;
      let my = mouseY - height / 2;
      let pmx = pmouseX - width / 2;
      let pmy = pmouseY - height / 2;
      line(mx, my, pmx, pmy);
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (shadow){
      shadow = false;
      alert('shadow-off');
    } else{
      shadow = true;
      alert('shadow-on');
    }
  } else if(keyCode === SHIFT){
    if (changeMode){
      changeMode = false;
      alert('off');
    } else{
      changeMode = true;
      alert('on');
      }
    } else if(keyCode === UP_ARROW){
      setX = mouseX - width / 2;
      setY = mouseY - height / 2;
      setMX = pmouseX - width / 2;
      setMY = pmouseY - height / 2;
      alert('Center point setting was successful.');
    } else if(keyCode === DOWN_ARROW){
      symmetry = +prompt('Enter the desired number of reflections.',24);
      angle = 360 / symmetry;
    }
}