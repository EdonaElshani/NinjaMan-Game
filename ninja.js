var world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 3, 2, 3, 2, 2, 1, 1],
  [1, 2, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 2, 3, 2, 2, 1, 2, 3, 1, 1],
  [1, 1, 1, 1, 3, 2, 2, 1, 1, 1],
  [1, 2, 3, 1, 1, 1, 2, 2, 1, 1],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [1, 3, 2, 3, 2, 2, 3, 2, 1, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var worldDictionary = {
  0: "blank",
  1: "wall",
  2: "sushi",
  3: "onigiri",
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
var direction = "right";
function drawNinja() {
  document.querySelector(".ninja-man").style.left = ninjaMan.x * 50 + "px";
  document.querySelector(".ninja-man").style.top = ninjaMan.y * 50 + "px";
  document.querySelector(".ninja-man").style.backgroundImage = "url(img/" + direction + ".gif)";
}

drawNinja();
var eatenSushi = 0;
var eatenOnigiri = 0;
document.onkeydown = function (e) {
  if (e.keyCode == 37 && world[ninjaMan.y][ninjaMan.x - 1] != 1) {
    //LEFT
    ninjaMan.x = ninjaMan.x - 1;
    if (world[ninjaMan.y][ninjaMan.x - 1] == 2) {
      eatenSushi++;
    } else if (world[ninjaMan.y][ninjaMan.x - 1] == 3) {
      eatenOnigiri++;
    }
    direction = "left";
  } else if (e.keyCode == 39 && world[ninjaMan.y][ninjaMan.x + 1] != 1) {
    //RIGHT
    ninjaMan.x = ninjaMan.x + 1;
    direction = "right";
    if (world[ninjaMan.y][ninjaMan.x] == 2) {
      eatenSushi++;
    } else if (world[ninjaMan.y][ninjaMan.x] == 3) {
      eatenOnigiri++;
    }
  } else if (e.keyCode == 40 && world[ninjaMan.y + 1][ninjaMan.x] != 1) {
    //DOWN
    ninjaMan.y = ninjaMan.y + 1;
    direction = "down";
    if (world[ninjaMan.y][ninjaMan.x] == 2) {
      eatenSushi++;
    } else if (world[ninjaMan.y][ninjaMan.x] == 3) {
      eatenOnigiri++;
    }
  } else if (e.keyCode == 38 && world[ninjaMan.y - 1][ninjaMan.x] != 1) {
    //TOP
    direction = "top";
    ninjaMan.y = ninjaMan.y - 1;
    if (world[ninjaMan.y][ninjaMan.x] == 2) {
      eatenSushi++;
    } else if (world[ninjaMan.y][ninjaMan.x] == 3) {
      eatenOnigiri++;
    }
  }
  world[ninjaMan.y][ninjaMan.x] = 0;
  drawNinja();
  drawWorld();

  var sushiScore = document.querySelector(".sushi-Score");
  sushiScore.textContent = eatenSushi * 10 + "pts";

  var onigiriScore = document.querySelector(".onigiri-Score");
  onigiriScore.textContent = eatenOnigiri * 5 + "pts";
};
