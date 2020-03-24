var view = {
 displayMessage: function(msg) {
 var messageArea = document.getElementById("messageArea");
 messageArea.innerHTML = msg;
 },
 displayHit: function(location) {
 var cell = document.getElementById(location);
 cell.setAttribute("class", "hit");
 },
 displayMiss: function(location) {
 var cell = document.getElementById(location);
 cell.setAttribute("class", "miss");
 }
};

var model = {
 boardSize: 7,
 numShips: 3,
 shipsSunk: 0,
 shipLength: 3,
 ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
 { locations: ["24", "34", "44"], hits: ["", "", ""] },
 { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
 fire: function(guess) {
 for (var i = 0; i < this.numShips; i++) {
 var ship = this.ships[i];
 var locations = ship.locations;
 var index = locations.indexOf(guess);
 if (index >= 0) {
 ship.hits[index] = "hit";
 view.displayHit(guess);
 view.displayMessage("HIT!");
 if (this.isSunk(ship)) {
 	view.displayMessage("You sank my battleship!");
 this.shipsSunk++;
 }
 return true;
 }
 }
  view.displayMiss(guess);
 view.displayMessage("You missed.");
 return false;
 },
isSunk: function(ship) {
 for (var i = 0; i < this.shipLength; i++) {
 if (ship.hits[i] !== "hit") {
 return false;
 }
 }
 return true;
}

};

function parseGuess(guess) {
 var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
 if (guess === null || guess.length !== 2) {
 alert("Oops, please enter a letter and a number on the board.");
 } else {
 firstChar = guess.charAt(0);
 var row = alphabet.indexOf(firstChar);
 var column = guess.charAt(1);

 if (isNaN(row) || isNaN(column)) {
 alert("Oops, that isn't on the board.");
 } else if (row < 0 || row >= model.boardSize ||
 column < 0 || column >= model.boardSize) {
 alert("Oops, that's off the board!");
 } else {
 return row + column;
 }
 }
 return null;
}

var controller = {
 guesses: 0,
 processGuess: function(guess) {
 var location = parseGuess(guess);
 if (location) {
 	this.guess++;
 	var hit = model.fire(location);
 	if (hit && model.shipsSunk === model.numShips) {
 view.displayMessage("You sank all my battleships, in " +
 this.guesses + " guesses");
  }
 }
 }
};

function init() {
 var fireButton = document.getElementById("fireButton");
 fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
 guessInput.onkeypress = handleKeyPress;
}
function handleFireButton() {
 var guessInput = document.getElementById("guessInput");
 var guess = guessInput.value;
 controller.processGuess(guess);
 guessInput.value = "";
}

function handleKeyPress(e) {
 var fireButton = document.getElementById("fireButton");
 if (e.keyCode === 13) {
 fireButton.click();
 return false;
 }
}

window.onload = init;




// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");


// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));
// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");
// model.fire("22");
// model.fire("23");

// view.displayMiss("11");
// view.displayHit("32");
// view.displayMiss("53");
// view.displayHit("15");
// view.displayMiss("25");
// view.displayHit("23");
// view.displayMessage("Tap tap, is this thing on?");


// var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
//  { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
//  { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];


// var ship2 = ships[1];
// var locations = ship2.locations;
// console.log("Location is " + locations[1]);

// var ship3 = ships[2];
// var hits = ship3.hits;
// if (hits === "hit") {
//  console.log("Ouch, hit on third ship at location one");
// }

// var ship1 = ships[0];
// var hits = hits;
// hits[2] = "hit";