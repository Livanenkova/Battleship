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
 shipLength: 3,
 shipsSunk: 0,
 ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
 { locations: ["24", "34", "44"], hits: ["", "", ""] },
 { locations: ["10", "11", "12"], hits: ["", "", ""] }]
};

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