var speed = 10;
var direction = "left";
var size = 1;
var santa;
var fireplace;

turnInterval = setInterval(move, speed); // Call the turn function periodically

oxo.screens.loadScreen("game", function() {
  fireplace = document.getElementById("fireplace");
  santa = document.getElementById("santa");
  oxo.elements.onCollisionWithElement(santa, fireplace, function() {
  console.log("you lost");
  });
});

function move() {
  oxo.animation.move(fireplace, direction, size, true); // Move "size" pixels to the "direction"
} 
function jump() {
  oxo.animation.move(santa, 'up', 100, true);
}


oxo.inputs.listenKey('up', function() {
  jump();
});