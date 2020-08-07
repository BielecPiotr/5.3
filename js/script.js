function playGame(playerInput) {

clearMessages();

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
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerMove = getMoveName(playerInput);

console.log('computerMove: ' + computerMove);
console.log('playerMove: ' + playerMove);

printMessage('Mój ruch to: ' + computerMove + '. Twój to: ' + playerMove + '.')

function displayResult(argComputerMove, argPlayerMove){

    if (argComputerMove == argPlayerMove){
        return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Wygrałeś!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Wygrałeś!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Wygrałeś!';
    } else if (argPlayerMove == 'nieznany ruch') {
        return 'Wykonałeś nieznany ruch!';
    } else {
        return 'Przegrałeś!';
    }
}

let argComputerMove = computerMove;
let argPlayerMove = playerMove;

console.log('argComputerMove: ' + argComputerMove);
console.log('argPlayerMove: ' + argPlayerMove);


let whoWin = displayResult(argComputerMove, argPlayerMove);


alert(whoWin);

} 
