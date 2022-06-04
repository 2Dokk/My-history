//code by greg: https://editor.p5js.org/bigMontana/sketches/ShA65vvVV
//http://codegreg.net/2019/09/30/sports-data-visualizations-with-p5js/

let games = [
  ["Boston Celtics", "105", "Philadelphia 76ers", "87", ""],
  ["Philadelphia 76ers", "127", "Chicago Bulls", "108", ""],
  ["Philadelphia 76ers", "116", "Orlando Magic", "115", ""],
  ["Detroit Pistons", "133", "Philadelphia 76ers", "132", "OT"],
  ["Milwaukee Bucks", "123", "Philadelphia 76ers", "108", ""],
  ["Philadelphia 76ers", "105", "Charlotte Hornets", "103", ""],
  ["Philadelphia 76ers", "113", "Atlanta Hawks", "92", ""],
  ["Toronto Raptors", "129", "Philadelphia 76ers", "112", ""],
  ["Philadelphia 76ers", "122", "Los Angeles Clippers", "113", ""],
  ["Philadelphia 76ers", "109", "Detroit Pistons", "99", ""],
  ["Brooklyn Nets", "122", "Philadelphia 76ers", "97", ""],
  ["Indiana Pacers", "94", "Philadelphia 76ers", "100", ""],
  ["Philadelphia 76ers", "133", "Charlotte Hornets", "132", "OT"],
  ["Memphis Grizzlies", "112", "Philadelphia 76ers", "106", "OT"],
  ["Miami Heat", "114", "Philadelphia 76ers", "124", ""],
  ["Orlando Magic", "111", "Philadelphia 76ers", "106", ""],
  ["Philadelphia 76ers", "113", "Utah Jazz", "107", ""],
  ["Charlotte Hornets", "119", "Philadelphia 76ers", "122", "OT"],
  ["Philadelphia 76ers", "119", "Phoenix Suns", "114", ""],
  ["Philadelphia 76ers", "121", "New Orleans Pelicans", "120", ""],
  ["Philadelphia 76ers", "112", "Cleveland Cavaliers", "121", ""],
  ["Brooklyn Nets", "125", "Philadelphia 76ers", "127", ""],
  ["Philadelphia 76ers", "117", "New York Knicks", "91", ""],
  ["Philadelphia 76ers", "123", "Washington Wizards", "98", ""],
  ["Philadelphia 76ers", "103", "Memphis Grizzlies", "95", ""],
  ["Toronto Raptors", "113", "Philadelphia 76ers", "102", ""],
  ["Detroit Pistons", "111", "Philadelphia 76ers", "117", ""],
  ["Philadelphia 76ers", "116", "Detroit Pistons", "102", ""],
  ["Philadelphia 76ers", "124", "Brooklyn Nets", "127", ""],
  ["Philadelphia 76ers", "101", "Indiana Pacers", "113", ""],
  ["Cleveland Cavaliers", "105", "Philadelphia 76ers", "128", ""],
  ["San Antonio Spurs", "123", "Philadelphia 76ers", "96", ""],
  ["Philadelphia 76ers", "131", "New York Knicks", "109", ""],
  ["Philadelphia 76ers", "126", "Toronto Raptors", "101", ""],
  ["Boston Celtics", "121", "Philadelphia 76ers", "114", "OT"],
  ["Utah Jazz", "97", "Philadelphia 76ers", "114", ""],
  ["Portland Trail Blazers", "129", "Philadelphia 76ers", "95", ""],
  ["Los Angeles Clippers", "113", "Philadelphia 76ers", "119", ""],
  ["Phoenix Suns", "127", "Philadelphia 76ers", "132", ""],
  ["Philadelphia 76ers", "106", "Dallas Mavericks", "100", ""],
  ["Philadelphia 76ers", "132", "Washington Wizards", "115", ""],
  ["Washington Wizards", "123", "Philadelphia 76ers", "106", ""],
  ["Philadelphia 76ers", "121", "Atlanta Hawks", "123", ""],
  ["New York Knicks", "105", "Philadelphia 76ers", "108", ""],
  ["Philadelphia 76ers", "149", "Minnesota Timberwolves", "107", ""],
  ["Indiana Pacers", "96", "Philadelphia 76ers", "120", ""],
  ["Philadelphia 76ers", "115", "Oklahoma City Thunder", "117", ""],
  ["Philadelphia 76ers", "121", "Houston Rockets", "93", ""],
  ["Philadelphia 76ers", "122", "San Antonio Spurs", "120", ""],
  ["Denver Nuggets", "126", "Philadelphia 76ers", "110", ""],
  ["Los Angeles Lakers", "105", "Philadelphia 76ers", "121", ""],
  ["Golden State Warriors", "104", "Philadelphia 76ers", "113", ""],
  ["Sacramento Kings", "115", "Philadelphia 76ers", "108", ""],
  ["Philadelphia 76ers", "107", "Toronto Raptors", "119", ""],
  ["Philadelphia 76ers", "117", "Denver Nuggets", "110", ""],
  ["Philadelphia 76ers", "143", "Los Angeles Lakers", "120", ""],
  ["Philadelphia 76ers", "109", "Boston Celtics", "112", ""],
  ["New York Knicks", "111", "Philadelphia 76ers", "126", ""],
  ["Philadelphia 76ers", "106", "Miami Heat", "102", ""],
  ["Philadelphia 76ers", "115", "Portland Trail Blazers", "130", ""],
  ["New Orleans Pelicans", "110", "Philadelphia 76ers", "111", ""],
  ["Oklahoma City Thunder", "104", "Philadelphia 76ers", "108", ""],
  ["Philadelphia 76ers", "117", "Golden State Warriors", "120", ""],
  ["Philadelphia 76ers", "114", "Orlando Magic", "106", ""],
  ["Chicago Bulls", "108", "Philadelphia 76ers", "107", ""],
  ["Houston Rockets", "107", "Philadelphia 76ers", "91", ""],
  ["Philadelphia 76ers", "106", "Indiana Pacers", "89", ""],
  ["Philadelphia 76ers", "106", "Cleveland Cavaliers", "99", ""],
  ["Philadelphia 76ers", "123", "Sacramento Kings", "114", ""],
  ["Milwaukee Bucks", "125", "Philadelphia 76ers", "130", ""],
  ["Charlotte Hornets", "114", "Philadelphia 76ers", "118", ""],
  ["Philadelphia 76ers", "118", "Boston Celtics", "115", ""],
  ["Atlanta Hawks", "129", "Philadelphia 76ers", "127", ""],
  ["Orlando Magic", "119", "Philadelphia 76ers", "98", ""],
  ["Philadelphia 76ers", "123", "Brooklyn Nets", "110", ""],
  ["Minnesota Timberwolves", "109", "Philadelphia 76ers", "118", ""],
  ["Dallas Mavericks", "122", "Philadelphia 76ers", "102", ""],
  ["Atlanta Hawks", "130", "Philadelphia 76ers", "122", ""],
  ["Philadelphia 76ers", "122", "Milwaukee Bucks", "128", ""],
  ["Chicago Bulls", "96", "Philadelphia 76ers", "116", ""],
  ["Miami Heat", "122", "Philadelphia 76ers", "99", ""],
  ["Philadelphia 76ers", "125", "Chicago Bulls", "109", ""],
  ["Philadelphia 76ers", "102", "Brooklyn Nets", "111", ""],
  ["Philadelphia 76ers", "145", "Brooklyn Nets", "123", ""],
  ["Brooklyn Nets", "115", "Philadelphia 76ers", "131", ""],
  ["Brooklyn Nets", "108", "Philadelphia 76ers", "112", ""],
  ["Philadelphia 76ers", "122", "Brooklyn Nets", "100", ""],
  ["Toronto Raptors", "108", "Philadelphia 76ers", "95", ""],
  ["Toronto Raptors", "89", "Philadelphia 76ers", "94", ""],
];
let bubbles = [];
let vertices = [];
let alphaS = 0.6;
let colors = ["rgba(234, 21, 67, 0.6)", "rgba(1, 96, 173, 0.6)"];
let colorsChange = [
  "rgba(234, 21, 67," + alphaS + ")",
  "rgba(1, 96, 173," + alphaS + ")",
];
let hovered = [];
let scoreboard = [];
let scoreboardData = [];
let legends = [];

function setup() {
  //SETUP
  createCanvas(700, 700);
  angleMode(DEGREES);
  frameRate(30);

  // DRAWING AN 82 SIDED FIGURE AND LOGGING IT'S VERTICES
  polygon(0, 0, 240, 82);

  // INSTANTIATE LEGEND AND ADD TO LEGEND ARRAY
  let legend = new Legend(colorsChange[1], colorsChange[0]);
  legends.push(legend);

  // INSTANTIATING THE BUBBLES INTO THE BUBBLES ARRAY
  for (i = 0; i < 82; i++) {
    let stats = getGameStats(games[i][1], games[i][3], i);
    let otGame;
    let didWin;

    //Who won?
    if (didTeamWin("Philadelphia 76ers", stats[1])) {
      didWin = colors[1];
    } else {
      didWin = colors[0];
    }

    //Radius size by points margin
    let radius = stats[2] * 2;
    if (radius <= 5) {
      radius = 8;
    }

    //OT Game?
    if (games[i][4] === "OT") {
      // strokeWeight(2);
      // stroke(0);
      otGame = true;
    } else {
      // noStroke()
      otGame = false;
    }
    let g = new Game(radius, vertices[i].x, vertices[i].y, didWin, otGame, i);
    bubbles.push(g);
  }
}

function draw() {
  background(255);
  translate(canvas.width / 4, canvas.height / 4);
  if (alphaS <= 0) {
    alphaS = 0;
  }
  colorsChange = [
    "rgba(234, 21, 67," + alphaS + ")",
    "rgba(1, 96, 173," + alphaS + ")",
  ];

  // SHOWING ALL THE BUBBLES
  for (i = 0; i < 82; i++) {
    bubbles[i].show();
  }

  // SHOWING THE LEGEND
  for (i = 0; i < legends.length; i++) {
    legends[i].show();
  }

  // DETECTING THE HOVER ON A BUBBLE
  for (i = 0; i < bubbles.length; i++) {
    if (
      bubbles[i].rollover(mouseX - canvas.width / 4, mouseY - canvas.height / 4)
    ) {
      if (bubbles[i].isGameInHovered()) {
        // print('game already add to hovered');
      } else {
        hovered.push(bubbles[i]);
      }
    } else {
      if (bubbles[i].isGameInHovered()) {
        if (bubbles[i].isGameCurrentlyScoreboard() === false) {
          bubbles[i].animateUnhovered();
          hovered.splice(hovered.indexOf(bubbles[i]));
        } else {
          hovered.splice(hovered.indexOf(bubbles[i]));
        }
      }
    }
  }

  // ANIMATING THE HOVERED GAMES
  if (hovered.length != 0) {
    for (i = 0; i < hovered.length; i++) {
      hovered[i].animateHovered();
    }
  }

  //ANIMATING THE GAME TO A SCOREBOARD
  if (scoreboard.length != 0) {
    // for (i = 0; i < 1; i++) {
    scoreboard[0].becomeScoreboard();
    // }
  }

  // ADDING STATS TO SCOREBOARD
  if (scoreboardData.length !== 0) {
    scoreboardData[0].show();
  }

  // let stat = new Scoreboard(games[0][0],games[0][1],games[0][2],games[0][3], colors[0]);
  // stat.show();
}

function polygon(x, y, radius, npoints) {
  let fullCircle = -90;
  let angle = 360 / npoints;
  beginShape();
  for (let a = fullCircle; a < fullCircle + 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    let v = createVector(sx, sy);
    vertices.push(v);
  }
  endShape(CLOSE);
}

function mousePressed() {
  if (hovered.length > 0) {
    if (scoreboard.length == 0) {
      scoreboard.push(hovered[hovered.length - 1]);
      hovered.splice(hovered.indexOf(hovered.length - 1));
      scoreboard[0].makeStats();
    } else {
      scoreboard[0].goBackToBubble();
      scoreboard = [];
      scoreboardData = [];
      scoreboard.push(hovered[hovered.length - 1]);
      hovered.splice(hovered.indexOf(hovered.length - 1));
      scoreboard[0].makeStats();
    }
  } else {
    if (scoreboard.length !== 0) {
      scoreboard[0].goBackToBubble();
    }
    scoreboard = [];
    scoreboardData = [];
  }

  if (scoreboard.length !== 0) {
    legends = [];
  } else {
    if (legends.length == 0) {
      alphaS -= 0.15;
      let legend = new Legend(colorsChange[1], colorsChange[0]);
      legends.push(legend);
    }
  }
}

class Game {
  constructor(size, x, y, win, ot, index) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.ot = ot;
    this.win = win;
    this.originalColor = win;
    this.originalSize = size;
    this.originalX = x;
    this.originalY = y;
    this.index = index;
  }

  rollover(px, py) {
    let colorOG = this.win;
    let d = dist(px, py, this.x, this.y);

    if (d < this.size * 0.5) {
      // this.win = colors[2];
      // if (this.size == this.originalSize) {
      //   this.size = this.size * 1.5;
      // }
      // if (hovered.includes(this)) {
      //   print('its already in it');
      // } else {
      //   print('added to array');
      //   hovered.push(this);
      // }
      // print(hovered);
      return true;
    } else {
      // if (hovered.includes(this)) {
      //   if (scoreboard.includes(this)) {
      //     print('dont mess with its radius');
      //   } else {
      //     print('its already in it');
      //     let indexT = hovered.indexOf(this);
      //     hovered.splice(hovered.indexOf(this));
      //     this.win = this.originalColor;
      //     this.size = this.originalSize;
      //   }
      // }
      // print(hovered);
      return false;
    }
  }

  isGameInHovered() {
    if (hovered.includes(this)) {
      return true;
    } else {
      return false;
    }
  }

  isGameCurrentlyScoreboard() {
    if (scoreboard.includes(this)) {
      return true;
    } else {
      return false;
    }
  }

  animateHovered() {
    if (this.size == this.originalSize) {
      this.size = this.size * 1.5;
    }
  }

  animateUnhovered() {
    this.size = this.originalSize;
  }

  show() {
    fill(this.win);
    if (this.ot === true) {
      strokeWeight(2);
      stroke(0);
    } else {
      noStroke();
    }
    circle(this.x, this.y, this.size);
  }

  becomeScoreboard() {
    let xTravel = Math.abs(this.x);
    let yTravel = Math.abs(this.y);
    let sizeTravel = 250 - this.originalSize;
    let frames = 10;
    if (isPositive(this.x)) {
      this.x -= xTravel / frames;
    } else {
      this.x += xTravel / frames;
    }

    if (isPositive(this.y)) {
      this.y -= yTravel / frames;
    } else {
      this.y += yTravel / frames;
    }

    if (this.size <= 250) {
      this.size += sizeTravel / (frames * 3.2);
    }
  }

  goBackToBubble() {
    // let xTravel = Math.abs(this.originalX);
    // let yTravel = Math.abs(this.originalY);
    this.x = this.originalX;
    this.y = this.originalY;
    this.size = this.originalSize;
  }

  getColor() {
    return this.originalColor;
  }

  makeStats() {
    let stat = new Scoreboard(
      games[this.index][0],
      games[this.index][1],
      games[this.index][2],
      games[this.index][3]
    );
    scoreboardData.push(stat);
  }
}

class Scoreboard {
  constructor(homeTeam, homeScore, awayTeam, awayScore, color) {
    this.homeTeam = homeTeam;
    this.homeScore = homeScore;
    this.awayTeam = awayTeam;
    this.awayScore = awayScore;
    this.color = color;
  }

  show() {
    // fill(this.color);
    // circle(0, 0, 240);
    fill(255);
    textSize(18);
    text(this.homeTeam, 0, -55);
    text(this.awayTeam, 0, 55);
    textSize(30);
    text(this.homeScore, 0, -20);
    text(this.awayScore, 0, 20);
  }
}

function getGameStats(x, n, i) {
  if (parseInt(x) > parseInt(n)) {
    let scoreWin = games[i].indexOf(x);
    return [
      games[i][scoreWin],
      games[i][scoreWin - 1],
      parseInt(x) - parseInt(n),
    ];
  } else {
    let scoreWin = games[i].indexOf(n);
    return [
      games[i][scoreWin],
      games[i][scoreWin - 1],
      parseInt(n) - parseInt(x),
    ];
  }
}

function didTeamWin(teamName, i) {
  if (i === teamName) {
    return true;
  } else {
    return false;
  }
}

function isPositive(n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}

class Legend {
  constructor(winColor, loseColor) {
    this.winColor = winColor;
    this.loseColor = loseColor;
  }

  show() {
    textFont("Spectral SC");
    textSize(20);
    textAlign(CENTER);
    fill(this.winColor);
    text("|", 0, -200);
    textSize(12);
    text("start", 0, -180);
    textSize(20);
    fill(colors[1]);
    text("sixers", 0, 0);
    textSize(12);
    text("2018-2019", 0, 20);
    fill(this.loseColor);
    circle(0, -74, 20);
    text("Loss", 0, -50);
    fill(this.winColor);
    circle(0, -130, 20);
    text("Win", 0, -106);
    // noFill();
    stroke(2);
    stroke(0, alphaS * 255);
    noFill();
    circle(0, 60, 20);
    noStroke();
    fill(0, alphaS * 255);
    text("Overtime Game", 0, 88);
    // fill(this.winColor)
    // circle(0, (canvas.height / 2) - 20, 14);
    // fill(this.loseColor)
    // circle(0, (canvas.height / 2) - 20, 38);
    fill(0, alphaS * 255);
    text("circle size based on final point margin", 0, canvas.height / 2 - 24);
    // fill(this.winColor);
    // circle(-40, canvas.height/2 -20, 8);

    let rotateValue = 228;
    rotate(rotateValue);
    textSize(20);
    text("|", 0, -200);
    rotate(360 - rotateValue);
    textSize(12);
    text("Trade \n Deadline", -110, 110);
  }
}
