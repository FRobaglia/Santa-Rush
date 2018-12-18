var santaSpeed = 10;
var stageSpeed = 100;
var direction = "left";
var directionDown = "down";
var gravity = 1;
var size = 1;
var santa;
var fireplace;
var ground;
var santaInterval;
var stageInterval;

oxo.inputs.listenKey("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
    oxo.screens.loadScreen("game", function() {
      fireplace = document.getElementById("fireplace");
      santa = document.getElementById("santa");
      ground = document.getElementById("ground");
      santaInterval = setInterval(alwaysHappening, santaSpeed); // Call the turn function periodically
      stageInterval = setInterval(alwaysHappening, stageSpeed); // Call the turn function periodically
      oxo.elements.onCollisionWithElement(santa, fireplace, function() {
        console.log("you lost");
      });
    });
  }
});

function alwaysHappening() {
  oxo.animation.move(fireplace, direction, size, true);
  if (oxo.elements.onCollisionWithElement(santa, ground)) {
    console.log("test")
  }
}

function jump() {
  oxo.animation.move(santa, "up", 100, true);
}

oxo.inputs.listenKey("up", function() {
  jump();
});
