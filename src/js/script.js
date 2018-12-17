var speed = 10;
var direction = "left";
var size = 1;
var santa = document.getElementById("santa");
var fireplace;

turnInterval = setInterval(move, speed); // Call the turn function periodically

oxo.screens.loadScreen("game", function() {
  console.log("loaded GAME");
  fireplace = document.getElementById("fireplace");
});

function move() {
  console.log(fireplace);
  oxo.animation.move(fireplace, direction, size, true); // Move 10px to the left
  console.log("debug");
} 
