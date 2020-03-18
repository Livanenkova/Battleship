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

view.displayMiss("11");
view.displayHit("32");
view.displayMiss("53");
view.displayHit("15");
view.displayMiss("25");
view.displayHit("23");
view.displayMessage("Tap tap, is this thing on?");
