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

let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
let value = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King","Ace"];
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game');
let hitButton = document.getElementById('hit');
let stayButton = document.getElementById('stay');

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function(){
	textArea.innerHTML = 'Started...';
	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	stayButton.style.background = 'red';
});

function createDeck(){
	let deck = [];
	for (let i = 0; i < 4; i++){
		for (let j = 0; j < 13; j++){

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

function shuffle(deck){

}

let deck = createDeck();
let playerCards = [ getNextCard(), getNextCard()];

console.log(deck);
console.log(getCardString(playerCards[0]));