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

/* function addFireplace() {
  // Add a bonus element to the screen at a random position
  var randomFireplace = oxo.elements.createElement({
    class: '.stage__fireplace',
    styles: {
      transform:
        'translate(' +
        oxo.utils.getRandomNumber(0, firepl - 1) * size +
        'px, '
    },
  });
  oxo.elements.onCollisionWithElementOnce(santa, randomFireplace, function() {
    console.log('newFireplaceCollisioned')
  });
}
*/

/* function randomFireplace() {
  var fireplace = oxo.elements.createElement({
    styles: {
      transform:
        'translate(' +
        oxo.utils.getRandomNumber(0, xSquares - 1) * size +
        'px, ' +
        oxo.utils.getRandomNumber(0, ySquares - 1) * size +
        'px)',
    }
  });
}
*/ 

oxo.inputs.listenKey("up", function() {
  oxo.animation.move(santa, "up", 100, true);
});
