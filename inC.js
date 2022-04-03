let graph = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i< 10; i ++){
    for (let j = 0; j < 10; j++){
      graph.push(["fill(255,0,0)"]);
    }
  }
}

function draw() {
  background(220);
    for (let i = 0; i< 10; i ++){
      for (let j = 0; j < 10; j++){
        eval(graph[i][j]);
        rect(i*10,j*10,4,4);
    }
  }
}