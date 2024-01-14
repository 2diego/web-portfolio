let winner = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;
let computerSelection = "";
let playerSelection = "";

function computerPlay(computerSelection) {
  let choices = ["nightman", "dayman", "troll"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
};

let newGame = document.getElementById('new-game');
newGame.addEventListener( 'click', () => {

  playerScore = 0;
  document.getElementById('player-score').innerHTML = "<h3>Your score<br>" + playerScore + "</h3>";
  computerScore = 0;
  document.getElementById('cpu-score').innerHTML = "<h3>CPU score<br>" + computerScore + "</h3>";
  round = 0;
  document.getElementById('round').innerHTML = "ROUND: " + round;
});

game();

function game(dnt) {
  let daymanSelect = document.getElementById('daymanSelect');
  let nightmanSelect = document.getElementById('nightmanSelect');
  let trollSelect = document.getElementById('trollSelect');
  playerSelection = "";

// (round == 5) => end game //
  
  daymanSelect.addEventListener( 'click', () => {
  playerSelection = "dayman";
  computerSelection = computerPlay();
  playRoundDayman();
 });

  nightmanSelect.addEventListener( 'click', () => {
  playerSelection = "nightman";
  computerSelection = computerPlay();
  playRoundNightman();
 });

  trollSelect.addEventListener( 'click', () => {
  playerSelection = "troll";
  computerSelection = computerPlay();
  playRoundTroll();
 });
 };

function playRoundDayman() {
  if (computerSelection == "dayman") {
      winner = "Dayman tie!.. REMATCH!";
      document.getElementById('cpu-choice').innerHTML = '<img src="./images/dayman-tie.jpeg">';
      document.getElementById('player-choice').innerHTML = '<img src="./images/dayman-tie.jpeg">';
      document.getElementById('result').innerHTML = winner; 
} else if (computerSelection == "nightman") {
      winner = "Dayman is not a boy anymore!";
      playerScore++;
      round++;
      document.getElementById('round').innerHTML = "ROUND: " + round;
      document.getElementById('player-score').innerHTML = "<h3>Your score<br>" + playerScore + "</h3>";
      document.getElementById('cpu-choice').innerHTML = '<img src="./images/nightman-lose.jpeg" style="width: 240px; height: auto;">';
      document.getElementById('player-choice').innerHTML = '<img src="./images/dayman-win.jpeg" style="width: 240px; height: auto;">';
      document.getElementById('result').innerHTML = winner; 
} else if (computerSelection == "troll") {
    winner = "Dayman is not a man yet";
    computerScore++;
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
    document.getElementById('cpu-score').innerHTML = "<h3>CPU score<br>" + computerScore + "</h3>";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/troll-win.jpeg">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/dayman-lose.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('result').innerHTML = winner; 
};
};

function playRoundNightman() {
  if (computerSelection == "dayman") {
    winner = "Nightman gets humiliated";
    computerScore++;
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
    document.getElementById('cpu-score').innerHTML = "<h3>CPU score<br>" + computerScore + "</h3>";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/dayman-win.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/nightman-lose.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('result').innerHTML = winner;
} else if (computerSelection == "nightman") {
    winner = "Nightman tie! They are going for gasps!";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/nightman-tie.jpeg">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/nightman-tie.jpeg">';
    document.getElementById('result').innerHTML = winner; 
} else if (computerSelection == "troll") {
    winner = "Confound your lousy toll, Troll!";
    playerScore++;
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
    document.getElementById('player-score').innerHTML = "<h3>Your score<br>" + playerScore + "</h3>";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/troll-lose.jpeg">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/nightman-win.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('result').innerHTML = winner; 
};
};

function playRoundTroll() {
  if (computerSelection == "troll") {
    winner = "Troll tie! hey hey hey.. Troll tie!";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/troll-tie.jpeg">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/troll-tie.jpeg">';
    document.getElementById('result').innerHTML = winner; 
} else if (computerSelection == "dayman") {
    winner = "The troll owns that boy's.. did he said soul?";
    playerScore++;
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
    document.getElementById('player-score').innerHTML = "<h3>Your score<br>" + playerScore + "</h3>";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/dayman-lose.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/troll-win.jpeg">';
    document.getElementById('result').innerHTML = winner; 
} else if (computerSelection == "nightman") {
    winner = "The troll gets the toll but the nightman gets the.. I think he said soul";
    computerScore++;
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
    document.getElementById('cpu-score').innerHTML = "<h3>CPU score<br>" + computerScore + "</h3>";
    document.getElementById('cpu-choice').innerHTML = '<img src="./images/nightman-win.jpeg" style="width: 240px; height: auto;">';
    document.getElementById('player-choice').innerHTML = '<img src="./images/troll-lose.jpeg">';
    document.getElementById('result').innerHTML = winner; 
};
};

/*
  let computerSelection = computerPlay();
  let playerSelection = prompt("Play against the CPU\nType Rock, Paper or Scissors:");
  if ((computerSelection == "nightman" && playerSelection.toLowerCase() == "nightman") || (computerSelection == "dayman" && playerSelection.toLowerCase() == "dayman") || (computerSelection == "troll" && playerSelection.toLowerCase() == "troll")) {
    let winner = "it's a TIE!";
    round++;
    document.getElementById('round').innerHTML = "ROUND: " + round;
  } else if ((computerSelection == "nightman" && playerSelection.toLowerCase() == "troll") || (computerSelection == "troll" && playerSelection.toLowerCase() == "dayman") || (computerSelection == "dayman" && playerSelection.toLowerCase() == "nightman")) {
      let winner = "CPU WON!";
      computerScore++;
      round++;
      document.getElementById('round').innerHTML = "ROUND: " + round;
      document.getElementById('cpu-score').innerHTML = "<h3>CPU score<br>" + computerScore + "</h3>";
  } else if ((computerSelection == "nightman" && playerSelection.toLowerCase() == "dayman") || (computerSelection == "troll" && playerSelection.toLowerCase() == "nightman") || (computerSelection == "dayman" && playerSelection.toLowerCase() == "troll")) {
      let winner = "YOU WON!";
      playerScore++;
      round++;
      document.getElementById('round').innerHTML = "ROUND: " + round;
      document.getElementById('player-score').innerHTML = "<h3>Your score<br>" + playerScore + "</h3>";
    }
};  
*/