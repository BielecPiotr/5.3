function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
      }
    if(argMoveId == 3){
      return 'nożyce';
    }
  
    window.confirm('nieznany ruch');
    location.reload();

  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
} */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('computerMove: ' + computerMove);
console.log('playerMove: ' + playerMove);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
} else { 
    alert('Wprowadź poprawną liczbę!');
    location.reload();
} */

printMessage('Mój ruch to: ' + computerMove + '. Twój to: ' + playerMove + '.')



function displayResult(argComputerMove, argPlayerMove){

    if (argComputerMove == argPlayerMove){
        return 'Remis!';
    } 
    
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Wygrałeś!';
    } 
    
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return'Wygrałeś!';
    } 
    
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Wygrałeś!';
    } 
    
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Przegrałeś!';
    } 
    
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Przegrałeś!';
    }
    
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Przegrałeś!';
    }

}

let argComputerMove = computerMove;
let argPlayerMove = playerMove;

console.log('argComputerMove: ' + argComputerMove);
console.log('argPlayerMove: ' + argPlayerMove);


let whoWin = displayResult(argComputerMove, argPlayerMove);


if (confirm(whoWin)) {
    location.reload();
}
else {
    printMessage('I co teraz?')
}