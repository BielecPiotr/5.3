let playerScore = 0;
let computerScore = 0;

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

function addPlayerScore(playerScore, computerScore) {
  if(whoWin == 'Wygrałeś!'){
    playerScore += 1;
  } else if (whoWin == 'Przegrałeś!') {
    computerScore += 1;
  }
}

printResult('Gracz: ' + playerScore +'   Komputer: ' + computerScore);