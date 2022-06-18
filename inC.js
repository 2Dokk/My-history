var seeds = [];
var trees = [];
var leaves = [];

var ground, treeTop;
var firstClick = true;
var img;
let screen = "smallTree";

function preload() {
  img = loadImage("Norang.png");
}

function setup() {
  createCanvas(975, 600);
  background(0);

  ground = height - 30;
  treeTop = height - 600;

  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  text("Click to drop seed", width / 2, height / 2);
}

function draw() {
  if (screen === "smallTree") {
    drawingContext.shadowBlur = 0;

    //SEEDS
    strokeWeight(4);
    stroke(0);
    fill(255);
    seeds.forEach((seed, index, arr) => {
      seed.y += 3;
      if (seed.y > ground) {
        //transform seed in tree
        arr.splice(index, 1);
        trees.push(createTree(seed.x, ground));
      } else {
        fill("#65402B");
        ellipse(seed.x, seed.y, 15, 15);
      }
    });

    //BRANCHS
    noStroke();
    trees.forEach((tree, index, arr) => {
      tree.dir += (noise(tree.phase + millis() / 100) - 0.5) / 3;
      tree.dir += ((PI - tree.dir) * 0.09) / (tree.generation + 1); //point north
      tree.pos.x += sin(tree.dir) * 2;
      tree.pos.y += cos(tree.dir) * 2;
      fill(255);
      fill("#845A38");
      ellipse(tree.pos.x, tree.pos.y, tree.radius * 2, tree.radius * 2);

      //shadow the branch
      fill(0);
      for (var i = 0; i < PI; i += PI / 10) {
        let x = cos(i) * tree.radius;
        let y = sin(i) * tree.radius;
        ellipse(tree.pos.x + x, tree.pos.y + y, i, i);
      }

      tree.radius *= 0.998 / (tree.generation / 300 + 1);

      tree.life--;
      if (tree.life < 0) {
        arr.splice(index, 1);
        if (tree.radius > 3) {
          //transform root in branchs
          trees.push(createTree(tree.pos.x, tree.pos.y, tree));
          trees.push(createTree(tree.pos.x, tree.pos.y, tree));
        } else {
          //transform final branch in leaves
          leaves.push(createLeaf(tree.pos.x, tree.pos.y));
        }
      }
    });

    //LEAVES
    noStroke();
    drawingContext.shadowColor = color(0, 0, 0, 100);
    drawingContext.shadowBlur = 5;
    let w = width / 2 - img.width / 2;
    leaves.forEach((leaf, index, arr) => {
      var x = leaf.pos.x + random(-50, 50);
      var y = leaf.pos.y + random(-50, 50);
      fill(
        img.get(
          mod(floor(x - w), img.width),
          mod(floor(y - treeTop), img.height)
        )
      );
      //fill(random(50), random(100, 200), random(50));
      var size = random(2, 7);
      push();
      translate(x, y);
      rotate(random(TWO_PI));
      rect(0, 0, size, size, 0, size / 2, 0, size / 2);
      pop();

      leaf.life--;
      if (leaf.life < 0) {
        arr.splice(index, 1);
      }
    });
    noStroke();
    fill("#B3855A");
    rect(0, ground, windowWidth, windowHeight - ground);
  }
}

function mousePressed() {
  if (firstClick) {
    firstClick = false;
    background(0);
  }
  seeds.push(createVector(mouseX, mouseY));
}

function mouseDragged() {
  seeds.push(createVector(mouseX, mouseY));
}

function createTree(x, y, root) {
  if (!root) {
    root = {
      pos: createVector(x, y),
      dir: PI,
      radius: random(10, 30),
      generation: 0,
    };
  }
  var tree = {
    pos: root.pos.copy(),
    phase: random(1000),
    dir: root.dir,
    radius: root.radius,
    life: random(13, 100) / (root.generation / 10 + 1),
    generation: root.generation + 1,
  };
  return tree;
}

function createLeaf(x, y) {
  return {
    pos: createVector(x, y),
    life: random(200, 250),
  };
}

function mod(m, n) {
  return ((m % n) + n) % n;
}

function keyPressed() {
  if (keyCode == ENTER) {
    createCanvas(windowWidth, windowHeight);
    screen = "bigTree";
  }
}
