var world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, randomNumber(), randomNumber(), 2, 3, randomNumber(), 2, 1, 1],
  [1, randomNumber(), 1, 1, 1, 1, 1, randomNumber(), 1, 1],
  [1, 2, randomNumber(), 2, 2, 1, randomNumber(), randomNumber(), 1, 1],
  [1, 1, 1, 1, randomNumber(), randomNumber(), randomNumber(), 1, 1, 1],
  [1, 2, randomNumber(), 1, 1, 1, randomNumber(), randomNumber(), 1, 1],
  [1, 1, randomNumber(), 1, 1, 1, randomNumber(), 1, 1, 1],
  [1, 3, randomNumber(), 3, 2, randomNumber(), 3, randomNumber(), 1, 1],
  [1, randomNumber(), 1, randomNumber(), 1, 2, 1, randomNumber(), 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function randomNumber() {
  var min = 2;
  var max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
  document.querySelector(".ninja-man").style.backgroundImage =
    "url(img/" + direction + ".gif)";
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
  sushiScore.textContent = eatenSushi * 10;

  var onigiriScore = document.querySelector(".onigiri-Score");
  onigiriScore.textContent = eatenOnigiri * 5;
};
