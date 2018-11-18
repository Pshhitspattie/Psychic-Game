var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(computerChoice);

var userGuess;
var wins = 0;
var losses = 0;
var gussesLeft = 9;
var guessedLetters = [];

//grabs elements from the html text

var directionsText = document.getElementById("directions");
var explanationText = document.getElementById("explanation");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guessedLettersText = document.getElementById("guessed-letters");

console.log("This is a guess");

document.onkeyup = function(e) {

userGuess = e.key;

var computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];

guessedLetters.push(userGuess);





userGuess.textContent = "You chose:" + userGuess;
computerAnswer.textContent = "The computer chose:" + computerAnswer;
    winsText.textContent = "wins:" + wins;
    lossesText.textContent = "losses:" + losses;
    guessesLeftText.textContent = "Guesses Left:" + guessesLeft;

    if(userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
    }
    else {
        guessesLeft--;
    }
    if(guessesLeft === 0) {
        loses++;
        guessesLeft = 9;
        alert("Game Over! Try again");
    };

};


