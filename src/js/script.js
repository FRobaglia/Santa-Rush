var speed = 100;
var santa = document.getElementById("santa");
var fireplace = document.getElementById("fireplace");

turnInterval = setInterval(turn, speed); // Call the turn function periodically

oxo.screens.loadScreen("game", function() {
  console.log("loaded GAME");
});

function turn() {
  oxo.animation.move(fireplace, "left", 10); // Move 10px to the right
  console.log("debug");
}


turn();
