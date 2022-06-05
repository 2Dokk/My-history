let MAX = 600;
let MIN_BORDER = 10;
let MAX_BORDER = 15;

let BG_COLOR = (83, 119, 122);
let FG_COLOR = "0xefffffff";
let BORDER_COLOR = (20, 20, 20);

let particles;
let list = [];
let posX, posY;
let axis;
let fontCloudy;
let count;
let typedText = "Cloudy";
let inputText = [];

function preload() {
  fontCloudy = loadFont("Graceland_Personal_Use.ttf");
}

function setup() {
  // Configuración de la escena
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255);
  background(BG_COLOR);
  frameRate(30);
  noStroke();
  noCursor();

  // Cargamos la fuente
  textFont(font);
  fill(0);
  textAlign(CENTER, CENTER);
  text(typedText, width / 2, height / 2 - 70);
  typedText = "";
  inputText = [];

  count = 0;
  list = [width * height];
  loadPixels();

  for (let y = 0; y <= img.height - 1; y++) {
    for (let x = 0; x <= img.width - 1; x++) {
      let pb = get(x, y);
      if (red(pb) < 5) {
        list[y * width + x] = 0;
      } else {
        list[y * width + x] = 1;
      }
    }
  }
  updatePixels();

  particles = [];
}

function draw() {
  if (count < MAX) {
    let i = 0;
    while (i < 3) {
      axis = createVector(
        let(random(100, width - 100)),
        random(100, height - 100)
      );
      if (list[let(axis.y * width + axis.x)] == 0) {
        particles.push(new Particle(axis.x, axis.y));
        i++;
        count++;
      }
    }
  }
  background(BG_COLOR);
  for (let i = 0; i < particles.size(); i++) {
    this.p = particles.get(i);
    fill(BORDER_COLOR);
    p.display();
    p.update();
  }
  for (let j = 0; j < particles.size(); j++) {
    this.p = particles.get(j);
    fill(FG_COLOR);
    p.display2();
    p.update();
  }
}

function keyReleased() {
  if (key == ENTER || key == RETURN) {
    typedText = join(inputText.toArray(), "");
    // prletln(typedText);
    setup();
  } else {
    inputText.add(key);
  }
}

class Particle {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(1), random(1));
    this.scale = random(0.35, 0.9);
    this.radius = int(scale * 40);
    this.border = MIN_BORDER + 1;
    this.incBorder = 1;
    this.type = int(random(2));
  }

  update() {
    this.location.add(this.velocity);
    if (
      list[
        int(this.location.y) * width + int(this.location.x + this.velocity.x)
      ] == 1 ||
      list[
        int(this.location.y) * width + int(this.location.x - this.velocity.x)
      ] == 1
    ) {
      this.velocity.x *= -1;
    }
    if (
      list[
        int(this.location.y + this.velocity.y) * width + int(this.location.x)
      ] == 1 ||
      list[
        int(this.location.y - this.velocity.y) * width + int(this.location.x)
      ] == 1
    ) {
      this.velocity.y *= -1;
    }
  }

  display() {
    if (type == 0) {
      ellipse(this.location.x, this.location.y, radius, radius);
    } else {
      updateBorder();
      ellipse(
        this.location.x,
        this.location.y,
        radius + border,
        radius + border
      );
    }
  }

  display2() {
    if (type == 0) {
      updateBorder();
      ellipse(
        this.location.x,
        this.location.y,
        radius - border,
        radius - border
      );
    } else {
      ellipse(this.location.x, this.location.y, radius, radius);
    }
  }

  updateBorder() {
    if (border < MIN_BORDER || border > MAX_BORDER) {
      incBorder *= -1;
    }
    border += incBorder;
  }
}
