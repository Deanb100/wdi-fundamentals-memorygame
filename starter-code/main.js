// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

/* Commented out if statement to work on in next Unit
if (cardTwo === cardFour) {
  alert("You found a match!");
} else if (cardTwo === cardThree) {
  alert("You found a match!");
} else if (cardTwo === cardOne) {
  alert("You found a match!");
} else {
  alert("Sorry, try again");
}
*/
var board = document.getElementById("game-board");

var createBoard = function () {
	for (var i = 0; i < 4; i++) {
  		var cardElement = document.createElement("div");
   		cardElement.className = "card"; 
    //	document.getElementsById('game-board')[0].appendChild(cardElement);
    	board.appendChild(cardElement);
   	}
 }; 