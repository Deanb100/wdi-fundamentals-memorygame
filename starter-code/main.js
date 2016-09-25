// Variable for card names array for all the cards
var cards = ["queen", "queen","king","king"];

// Array for the cards that are in play
var cardsInPlay = [];

// Variable for the game board to add cards to
var board = document.getElementById("game-board");

// Function to create cards via div elements by looping thru cards array 
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
  		var cardElement = document.createElement("div");
   		// create class for cards for styling
   		cardElement.className = "card"; 
   		// this will set the card's 'data-card' to be the element (index position in) of the array
        // data-attributes store data about an element not tied to a style i.e. king.
        cardElement.setAttribute("data-card", cards[i]);
        // when a card is clicked the function isTwoCards will be executed
    	cardElement.addEventListener("click", isTwoCards);
    	
    	// append card to the board
    	board.appendChild(cardElement);  
   	}
 } 

	//Test if two cards in play are a match
function isTwoCards() {
  // Note - "this" gives you access to the cardElement clicked on
  cardsInPlay.push(this.getAttribute("data-card"));
	// display the card image
	console.log(this.getAttribute("data-card"));
	if (this.getAttribute("data-card") === "king") {
		this.innerHTML = "<img src= 'KingHeartsbnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src= 'QueenHeartsv6buNt2.png'>"; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // reset cardboard for next go
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // display alert re a match or to try again if no match
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

createBoard();