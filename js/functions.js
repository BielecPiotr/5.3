function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(res){
	let div = document.createElement('div');
	div.innerHTML = res;
	document.getElementById('result').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
      } else if(argMoveId == 3){
      return 'nożyce';
    } else { 
        return 'nieznany ruch';
	}
	
  }function displayResult(argComputerMove, argPlayerMove, playerScore, computerScore) {

    if (argComputerMove == argPlayerMove){
		return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		playerScore += 1;
		return 'Wygrałeś!';
		
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		playerScore += 1;
		return 'Wygrałeś!';
		
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		playerScore += 1;
		return 'Wygrałeś!';
		
    } else if (argPlayerMove == 'nieznany ruch') {
        return 'Wykonałeś nieznany ruch!';
    } else {
		computerScore += 1;
		return 'Przegrałeś!';
		
	}

}



function playGame(playerInput) {

	clearMessages();
	
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	
	console.log('Wylosowana liczba to: ' + randomNumber);
	
	let computerMove = getMoveName(randomNumber);
	
	let playerMove = getMoveName(playerInput);
	
	console.log('computerMove: ' + computerMove);
	console.log('playerMove: ' + playerMove);
	
	printMessage('Mój ruch to: ' + computerMove + '. Twój to: ' + playerMove + '.')
	
	let argComputerMove = computerMove;
	let argPlayerMove = playerMove;
	
	console.log('argComputerMove: ' + argComputerMove);
	console.log('argPlayerMove: ' + argPlayerMove);
	
	let whoWin = displayResult(argComputerMove, argPlayerMove);

	console.log('whoWin: ' + whoWin);

	printMessage(whoWin);
	} 
