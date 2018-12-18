var santaSpeed = 10;
var stageSpeed = 10;
var direction = "left";
var directionDown = "down";
var gravity = 1;
var size = 1;
var santa;
var fireplace;
var ground;
var santaInterval;
var stageInterval;

oxo.inputs.listenKeyOnce("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
    oxo.screens.loadScreen("game", function() {
      fireplace = document.getElementById("fireplace");
      santa = document.getElementById("santa");
      ground = document.getElementById("ground");
      santaInterval = setInterval(player, santaSpeed);
      stageInterval = setInterval(stage, stageSpeed); // Call the turn function periodically
      oxo.elements.onCollisionWithElement(santa, fireplace, function() {
        console.log("you lost");
      });
    });
  }
});

function player() {
  oxo.animation.move(santa, directionDown, gravity, true);
}
function stage() {
  oxo.animation.move(fireplace, direction, size, true);
}

oxo.inputs.listenKey("up", function() {
  oxo.animation.move(santa, "up", 100, true);
});
