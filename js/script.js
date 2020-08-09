{
let x = 0;
let y = 0;

printResult('gracz: ' + x + '  Komputer: ' + y);

const playGame = function(playerInput) {

clearMessages();

const getMoveName = function(argMoveId){
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

const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);

const playerMove = getMoveName(playerInput);

console.log('computerMove: ' + computerMove);
console.log('playerMove: ' + playerMove);

printMessage('Mój ruch to: ' + computerMove + '. Twój to: ' + playerMove + '.')

const displayResult = function(argComputerMove, argPlayerMove){

    if (argComputerMove == argPlayerMove){
        return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      x += 1;  
      return 'Wygrałeś!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      x += 1;  
      return 'Wygrałeś!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      x += 1;  
      return 'Wygrałeś!';
    } else if (argPlayerMove == 'nieznany ruch') {
        return 'Wykonałeś nieznany ruch!';
    } else {
        y += 1;
        return 'Przegrałeś!';
    }
}

const argComputerMove = computerMove;
const argPlayerMove = playerMove;

console.log('argComputerMove: ' + argComputerMove);
console.log('argPlayerMove: ' + argPlayerMove);

console. log('x: ' + x);
console.log('y: ' + y);

const whoWin = displayResult(argComputerMove, argPlayerMove);


printMessage(whoWin);

clearResult();
printResult('gracz: ' + x + '  Komputer: ' + y);

} 

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

}