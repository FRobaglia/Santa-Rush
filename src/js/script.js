var santaSpeed = 10;
var stageSpeed = 10;
var direction = "left";
var directionDown = "down";
var gravity = 4;
var size = 4;
var santa;
var fireplace;
var santaInterval;
var stageInterval;
var ground;

oxo.inputs.listenKeyOnce("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
    oxo.screens.loadScreen("game", function() {
      fireplace = document.getElementById("fireplace");
      ground = oxo.elements.createElement({
        obstacle: true,
        class: "stage__ground", // optional,
        styles: { // optional
          transform: 'translate(0px, 479px)'
        },
      });
      santa = oxo.elements.createElement({
        class: "character__santa", // optional,
        styles: { // optional
          transform: 'translate(50px, 279px)'
        },
      });
      santaInterval = setInterval(playerFall, santaSpeed);
      stageInterval = setInterval(stage, stageSpeed); // Call the turn function periodically
      oxo.elements.onCollisionWithElement(santa, fireplace, function() {
        console.log("you lost");
      });
      oxo.elements.onCollisionWithElement(santa, ground, function() {
        console.log("collision with ground");
      });
    });
  }
});

function jump() {
  if (gravity > 0) {
    gravity = -gravity;
    setTimeout(function() {
      gravity = -gravity;
    }, 1000);
  }
}

function playerFall() {
  oxo.animation.move(santa, directionDown, gravity, true);
}
function stage() {
  oxo.animation.move(fireplace, direction, size, true);
}


oxo.inputs.listenKey("up", function() {
  jump();
});
