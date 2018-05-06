
var words = ['segal', 'norris', 'stallone', 'zidar', 'chan', 'statham'];
var word = words[Math.floor(Math.random() * words.length)];
var wordArray = [];
var guessArray = [];
var remainingLetters = word.length;
var remainingGuesses = word.length + 5;
var guessDisplay = document.getElementById("guessedDiv");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var display = document.getElementById("wordDiv");

//creates answer array
function getWord() {
    word = words[Math.floor(Math.random() * words.length)];
    remainingLetters = word.length;
    remainingGuesses = word.length + 5;
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = "_";
    }
}

//win checking function
function winCheck() {
    if (remainingLetters <= 0) {
        display.innerHTML = wordArray.join("");
        guessDisplay.innerHTML = "You Win!"
    }
}

//loss checking function
function loseCheck() {
    if (remainingGuesses <= 0) {
        display.innerHTML = "You Lose"
        guessDisplay.innerHTML = '<button onclick="gameStart()">Play Again</button>'
    }
}

//function for choosing word so game can start
function gameStart() {
getWord();
guessArray = [];

display.innerHTML = wordArray.join(" ");
guessDisplay.innerHTML = guessArray
}

//loading intital word
gameStart();

//event when user presses key
document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();

    if (letters.indexOf(userGuess) != -1) {
//swaps out dash for letter on correct guess
        if (word.indexOf(userGuess) != -1) {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess) {
                    wordArray[j] = userGuess;
                    remainingLetters--;
                    display.innerHTML = wordArray.join(" ");
                }
            }
        }
//displays wrong guesses
        else {
            guessArray.push(userGuess)
            remainingGuesses--;
            guessDisplay.textContent = guessArray.join(" ");
        }
    }

    else {
        alert("choose a letter");
    }

    winCheck();
    loseCheck();
}









