function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);+

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

if (computerMove == playerMove){
    printMessage('Remis!');
} 

else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
} 

else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrałeś!');
}




