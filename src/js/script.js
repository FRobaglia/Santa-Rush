var speed = 16;
var direction = "left";
var size = 1;
var santa;
var fireplace;
var gift;

turnInterval = setInterval(move, speed); // Call the turn function periodically

/** DOM Elements */
const DOM = {
  fireplace: null,
  santa: null
};

/** Functions */
function getDOMElements() {
  DOM.fireplace = document.getElementById("santa");
  DOM.santa = document.getElementById("fireplace");
  DOM.gift = document.getElementById("gift")
}

oxo.screens.loadScreen("game", function() {
  getDOMElements();
});

function move() {
  oxo.animation.move(DOM.fireplace, direction, 1, true); // Move "size" pixels to the "direction"
} 
function jump() {
  oxo.animation.move(DOM.santa, 'up', 100, true);
}

oxo.inputs.listenKey('up', function() {
  jump();
});

/** key for gift */
function fall() {
  oxo.animation.fall(DOM.santa, DOM.gift, direction, size, true);
} 

oxo.inputs(['space'], function(key){ 
fall()
});










