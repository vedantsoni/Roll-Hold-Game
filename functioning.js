//declaring a state variable(gamePlayig) which tells us the condition of the system
var scores, roundScore, activePlayer, gamePlaying;
startOver();
var lastDice;


//document.querySelector('#current-' + activePlayer).textcontent = dice;

document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying){
    //Random number
	var dice = Math.floor(Math.random() * 6) +1;

	//display the number
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src = 'dice-' + dice + '.png';

	if(dice === 6 && lastDice === 6){
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent= '0';
		nextPlayer;
	}

	//update the roundScore if the the rolled number is not 1
	else if(dice !== 1){
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else{
		//nextplayer
		nextPlayer();

		}
	}
});	

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){
		//ADD CURRENT SCORE TO THE GLOBAL SCORE
		scores[activePlayer] += roundScore;

		//update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		

		//check if player won the game
		if(scores[activePlayer] >= 20){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.diplsay = 'none';
			document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
			gamePlaying = false;
		}else{
			//turn for next player
		nextPlayer();
		}
	}
});

function nextPlayer(){
	//nextplayer
		activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-0').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}
//passing function in the listener event
document.querySelector('.btn-new').addEventListener('click', startOver);

function startOver(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

