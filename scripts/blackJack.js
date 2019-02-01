//clock
function updateTime(){
var now = new Date();
	months=["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	//hours minutes and seconds
	time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	
	//month and day
	date = months[now.getMonth()] + " " + now.getDate();	 

	//display
	document.getElementById("clock").innerHTML = date + " " + time;

	//calling function every 1000ms
	setTimeout(updateTime, 1000);
}
updateTime();

//
//Black Jack Code
//

//Card Variables 
let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
let value = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King","Ace"];

//DOM Variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game');
let hitButton = document.getElementById('hit');
let stayButton = document.getElementById('stay');

//Game Variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	dealerCards = [ getNextCard(), getNextCard()];
	playerCards = [ getNextCard(), getNextCard()]; 

	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	stayButton.style.background = 'red';
	showStatus();
});

hitButton.addEventListener('click', function(){
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});


stayButton.addEventListener('click', function(){
	gameOver = true;
	checkForEndOfGame();
	showStatus();
});

function createDeck(){
	let deck = [];
	for (let i = 0; i < suits.length; i++){
		for (let j = 0; j < value.length; j++){

			let card = { //card object
				suit: suits[i],
				value: value[j]
			};
			deck.push(card);
		}
	}
	return deck;
}

function getCardString(card){
	return card.value + " of " + card.suit;
}

function getNextCard(){
	return deck.shift();
}

function getCardNumericValue(card){
	switch(card.value){
		case 'Ace': return 1;
		case 'Two': return 2;
		case 'Three': return 3;
		case 'Four': return 4;
		case 'Five': return 5;
		case 'Six': return 6;
		case 'Seven': return 7;
		case 'Eight': return 8;
		case 'Nine': return 9;
		default: return 10;
	}
}

function getScore(cardArray){
	let score = 0;
	let hasAce = false;
	for (let i = 0; i<cardArray.length; i++){
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if (card.value === 'Ace') {
			hasAce = true;
		}
	}
	if (hasAce && score + 10 <= 21){
		return score + 10;
	}
	return score;
}

function updateScores(){
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}

function checkForEndOfGame(){
	updateScores();

	if (gameOver){
		while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21){
			dealerCards.push(getNextCard());
			updateScores();
		}
	}

	if(playerScore > 21){
		playerWon = false;
		gameOver = true;
	}
	else if (dealerScore > 21){
		playerWon = true;
		gameOver = true;
	}
	else if (gameOver){
		if (playerScore > dealerScore) {
			playerWon = true;
		}
		else {
			playerWon = false;
		}	
	}
}

function showStatus(){
	if (!gameStarted){
		textArea.innerHTML = 'Welcome to Black Jack';
		return;
	}

	let playerCardsString = '';
	for (let i=0; i< playerCards.length; i++){
		playerCards += getCardString(playerCards[i]) + '\n';
	}

	let dealerCardsString = '';
	for (let i=0; i< dealerCards.length; i++){
		dealerCards += getCardString(dealerCards[i]) + '\n';
	}

	updateScores();

	textArea.innerHTML = 'Dealer has:\n' + dealerCardsString + '(score: ' + dealerScore + ')\n\n' +
						'Player has:\n' + playerCardsString + '(score: ' + playerScore + ')\n\n';

	if(gameOver){
		if(playerWon){
			textArea.innerHTML += "YOU WIN!!!";
		}
		else {
			textArea.innerHTML += "Dealer Wins!";
		}
	newGameButton.style.display = 'inline';
	hitButton.style.display = 'none';
	stayButton.style.display = 'none';
	}

}

function shuffleDeck(deck){
	for (let i = 0; i< deck.length; i++){
		let swapIndex = Math.trunc(Math.random() * deck.length);
		let temp = deck[swapIndex];
		deck[swapIndex] = deck[i];
		deck[i] = temp;
	}
}
