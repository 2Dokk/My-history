let MAX = 600;
let MIN_BORDER = 10;
let MAX_BORDER = 15;
let BG_COLOR     = color(83, 119, 122);
let FG_COLOR     = color(0xEFFFFFFF);
let BORDER_COLOR = color(20, 20, 20);

ArrayList<Particle> particles;
let list;
let posX, posY;
let axis;
let font;
let count;
let typedText = 'Cloudy';
let inputText;

function setup() 
{
	// Configuración de la escena
  colorMode(RGB, 255, 255, 255);
  size(1112, 834);
    background(BG_COLOR);
  frameRate(30);
  noStroke();
  noCursor();
	
	// Cargamos la fuente
  font = createFont("https://openprocessing.org/sketch/537766/files/Graceland_Personal_Use.ttf", 300);
  textFont(font);
  fill(0);
  textAlign(CENTER, CENTER);
  text(typedText, width/2, height/2 - 70);
	typedText = "";
	inputText = [];
	
	count = 0;
  list = [width*height];
  loadPixels();
	
  for(let y = 0; y <= height - 1; y++) {
    for(let x = 0; x <= width - 1; x++) {
      let pb = pixels[y*width + x];
      if(red(pb) < 5) {  
				list[y*width + x] = 0;  
			} else {  
				list[y*width + x] = 1;  
			}
		}
	}
  updatePixels();
  
  particles = [];
}

function draw() 
{
   if (count < MAX) {
    let i=0;  while(i<3){
      axis = new PVector(int(random(100,width-100)),int(random(100,height-100)));
      if(list[int(axis.y*width+axis.x)]==0){
        particles.add(new Particle(axis.x,axis.y));
        i++;
        count++;
      }
    }
  }
  background(BG_COLOR);
  for (int i = 0; i < particles.size(); i++) {
    Particle p = particles.get(i);
    fill(BORDER_COLOR);
    p.display();
    p.update();
  }
  for (int j = 0; j < particles.size(); j++) {
    Particle p = particles.get(j);
    fill(FG_COLOR);
    p.display2();
    p.update();
  }
}

function keyReleased() 
{
	if (key == ENTER || key == RETURN) {
		typedText = join(inputText.toArray(), '');
		// println(typedText);
		setup();
	} else {
		inputText.add(key);
	}
		
}

class Particle {
  PVector location;
  PVector velocity;
  float scale;
  int radius;
	int border;
	int incBorder;
	int type;

  Particle(float x, float y) {
    location  = new PVector(x, y);
    velocity  = new PVector(random(1), random(1));
    scale     = random(.35, .9);
    radius    = int(scale * 40);
		border    = MIN_BORDER + 1;		
		incBorder = 1;
		type      = int(random(2));
  }

  function update() {
    location.add(velocity);
    if ((list[int(location.y)*width+int(location.x+velocity.x)]==1)   ||   (list[int(location.y)*width+int(location.x-velocity.x)]==1)) {  velocity.x *= -1;  }
    if ((list[int(location.y+velocity.y)*width+int(location.x)]==1) || (list[int(location.y-velocity.y)*width+int(location.x)]==1)) {  velocity.y *= -1;  }
  }

  function display() 
	{
		if (type == 0) {
    	ellipse(location.x, location.y, radius, radius);
		} else {
			updateBorder();
			ellipse(location.x, location.y, radius + border, radius + border);
		}

  }
  
  function display2() 
	{
		if (type == 0) {
			updateBorder();
			ellipse(location.x, location.y, radius - border, radius - border);
		} else {
			ellipse(location.x, location.y, radius, radius);
		}
  }
	
function updateBorder() 
	{
		if (border < MIN_BORDER || border > MAX_BORDER) {
			incBorder *= -1;
		}
		border += incBorder;
	}
}