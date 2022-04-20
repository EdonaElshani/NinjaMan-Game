var world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 1, 2, 2, 1],
  [1, 1, 1, 1, 2, 2, 2, 1, 1],
  [1, 2, 2, 1, 1, 1, 2, 2, 1],
  [1, 1, 2, 1, 1, 1, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var worldDictionary = {
  0: "blank",
  1: "wall",
  2: "sushi",
};

function drawWorld() {
  output = "";
  for (var row = 0; row < world.length; row++) {
    output += "<div class = 'row'>";
    for (var x = 0; x < world[row].length; x++) {
      output += "<div class = '" + worldDictionary[world[x][row]] + "'></div>";
    }
    output += "</div>";
  }

  document.getElementById("world").innerHTML = output;
}
drawWorld();

var leftValue = 50;
var topValue = 50;

var ninjaMan = {
  x: 1,
  y: 1,
};

function drawNinja() {
  document.querySelector(".ninja-man").style.left = ninjaMan.x * 50 + "px";
  document.querySelector(".ninja-man").style.top = ninjaMan.y * 50 + "px";
}

drawNinja();
var eatenSushi = 0;
document.onkeydown = function (e) {
  if (e.keyCode == 37 && world[ninjaMan.y][ninjaMan.x - 1] != 1) {
    //LEFT
    ninjaMan.x = ninjaMan.x - 1;
    eatenSushi++;
  }
  else if (e.keyCode == 39 && world[ninjaMan.y][ninjaMan.x + 1] != 1) {
    //RIGHT
    ninjaMan.x = ninjaMan.x + 1;
    eatenSushi++;
  }
  else if (e.keyCode == 40 && world[ninjaMan.y + 1][ninjaMan.x] != 1) {
    //DOWN
    ninjaMan.y = ninjaMan.y + 1;
    eatenSushi++;
  }
  else if (e.keyCode == 38 && world[ninjaMan.y - 1][ninjaMan.x] != 1) {
    //TOP
    ninjaMan.y = ninjaMan.y - 1;
    eatenSushi++;
  }
  world[ninjaMan.y][ninjaMan.x] = 0;
  drawNinja();
  drawWorld();

var sushiScore = document.querySelector(".sushi-Score");
sushiScore.textContent = eatenSushi * 10 + "pts";
};


