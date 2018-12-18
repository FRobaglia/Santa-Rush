var speed = 10;
var direction = "left";
var directionDown = "down";
var gravity = 2; 
var size = 1;
var santa;
var fireplace;
var ground;


turnInterval = setInterval(move, speed); // Call the turn function periodically

oxo.screens.loadScreen("game", function() {
  fireplace = document.getElementById("fireplace");
  santa = document.getElementById("santa");
  oxo.elements.onCollisionWithElement(santa, fireplace, 100, function() {
  console.log("you lost");
  });
  ground = document.getElementById("ground")
  oxo.elements.onCollisionWithElement(santa, ground, 100, function() {
    gravity = 0;
    console.log("you are on the ground");
    });
});


function move() {
  oxo.animation.move(fireplace, direction, size, true); 
  oxo.animation.move(santa, directionDown, gravity, true);// Move "size" pixels to the "direction"
};

function jump() {
  oxo.animation.move(santa, 'up', 90, true);
};

oxo.inputs.listenKey('up', function() {
  jump();
});


