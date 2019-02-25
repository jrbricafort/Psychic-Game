// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// Creates an array that lists out the only letters that can be guessed
var userGuessAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerChoiceAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("winshtml");
var lossesText = document.getElementById("losseshtml");
var guessesLeftText = document.getElementById("guessesLefthtml");
var guessesSoFarText = document.getElementById("guessesSoFarhtml");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoiceAllowed[Math.floor(Math.random() * computerChoiceAllowed.length)];

    // guessesSoFar counts all key inputs
    guessesSoFar++;

    // Game will run as long as guesses left does not reach 0
    if (guessesLeft > 0) {

        // When user guesses what the computer guesses, wins go up by 1 and guesses left reset to default 10
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 10;
        }

        // If user does not guess correctly, guesses left goes down and upon reaching 0, the user gets a loss and gets all 10 of their guesses to try again 
        else if (userGuess !== computerGuess) {
            guessesLeft--;
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
            }
        }
    }

    console.log(computerGuess);
    console.log(userGuess);

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guess Left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;
};