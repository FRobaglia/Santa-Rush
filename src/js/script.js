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
var giftInterval;
var ground;
var gift;

oxo.inputs.listenKeyOnce("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
      oxo.screens.loadScreen("game", function() {
      fireplace = document.getElementById("fireplace");
      ground = oxo.elements.createElement({
        obstacle: true,
        class: "stage__ground", // optional,
        styles: { // optional
          transform: 'translate(0px, 700px)'
        },
      });
      santa = oxo.elements.createElement({
        class: "character__santa", // optional,
        styles: { // optional
          transform: 'translate(50px, 500px)'
        },
      });
      santaInterval = setInterval(playerFall, santaSpeed);
      stageInterval = setInterval(stage, stageSpeed); // Call the turn function periodically
      giftInterval = setInterval(drop, stageSpeed);
      oxo.elements.onCollisionWithElement(santa, fireplace, function() {
        console.log("you lost");
      });
      oxo.elements.onCollisionWithElement(santa, ground, function() {
        console.log("collision with ground");
      });
    });
  }
});

oxo.inputs.listenKey('space', function() {
  gift = oxo.elements.createElement({
    class: 'gift',
    styles:{
      transform: 'translate (50px, 50px)'
    },
  })
  oxo.elements.onCollisionWithElement(gift, ground, function() {
    console.log("Oui");
    drop();
  });
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
function drop() {
  oxo.animation.move(gift, directionDown,gravity,true);
}
function addFireplace() {
  // Add a bonus element to the screen at a random position
  var randomFireplace = oxo.elements.createElement({
    class: ".stage__fireplace",
    styles: {
      transform:
        "translate(" + oxo.utils.getRandomNumber(0, firepl - 1) * size + "px, "
    }
  });
  oxo.elements.onCollisionWithElementOnce(santa, randomFireplace, function() {
    console.log("newFireplaceCollisioned");
  });
}

oxo.inputs.listenKey("up", function() {
  jump();
});






