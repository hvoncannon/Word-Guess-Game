
var words = ['doug', 'rugrats', 'animaniacs', 'ducktales', 'daria', 'freakazoid', 'kablam'];
var word = words[Math.floor(Math.random() * words.length)];
var wordArray = [];
var guessArray = [];
var guessedLetters = [];
var remainingLetters = word.length;
var remainingGuesses = word.length + 5;
var guessDisplay = document.getElementById("guessedDiv");
var display = document.getElementById("wordP");
var remainingdisplay = document.getElementById("remainingDiv");
var winImage = document.getElementById("showImage");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var button = '<button type="button" class="btn btn-info" onclick="gameStart()">Play Again</button>'
var winWord = "";

//creates answer array
function getWord() {
    word = words[Math.floor(Math.random() * words.length)];
    wordArray = [];
    guessedLetters = [];
    remainingLetters = word.length;
    remainingGuesses = word.length + 5;
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = "_";
    }
}

//win checking and win display update function
function winCheck() {
    if (remainingLetters <= 0) {
        winWord = wordArray.join("");
        display.innerHTML = winWord.charAt(0).toUpperCase() + winWord.slice(1);
        guessDisplay.innerHTML = "You Win!";
        remainingdisplay.innerHTML = button;
        winImage.innerHTML = '<img class="img-thumbnail m-2" src="./assets/images/' + word + '.jpg">';
    }
}

//loss checking function
function loseCheck() {
    if (remainingGuesses <= 0) {
        guessDisplay.innerHTML = "You Lose";
        remainingdisplay.innerHTML = button;

    }
}

//function for choosing word so game can start
function gameStart() {
getWord();
guessArray = [];
remainingdisplay.innerHTML = "Remaining Guesses: " + remainingGuesses;
display.innerHTML = wordArray.join(" ");
guessDisplay.innerHTML = guessArray;
winImage.innerHTML = "";
}

//loading intital word
gameStart();

//event when user presses key
document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();

    if (letters.indexOf(userGuess) != -1) {
//swaps out dash for letter on correct guess that has not already been guessed
        if (word.indexOf(userGuess) != -1 && guessedLetters.indexOf(userGuess) === -1) {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess) {
                    wordArray[j] = userGuess;
                    guessedLetters.push(userGuess);
                    display.innerHTML = wordArray.join(" ");
                    remainingLetters--;
                }
            }
        }

//if already guessed, avoids decrementing remaining letters
        else if (guessedLetters.indexOf(userGuess) != -1) {
        }
//displays wrong guesses if first time guessing
        else if (guessArray.indexOf(userGuess) === -1) {
            guessArray.push(userGuess)
            remainingGuesses--;
            guessDisplay.innerHTML = guessArray.join(" ");
            remainingdisplay.innerHTML = "Remaining Guesses: " + remainingGuesses;
        }
//does nothing if user is repeating a wrong guess
        else {

        }
    }

    else {
        alert("choose a letter");
    }

    winCheck();
    loseCheck();
}









