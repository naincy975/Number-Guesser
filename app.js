// Game values
let min = 1;
max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    bodyele = document.querySelector('.container');
message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
// Play Again Event Listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});
//Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < 1 || guess > 10) {
        gameOver(false, `Please enter a number between ${1} and ${10}`);

    }
    // Check if won
    else if (guess === winningNum) {
        // Game Over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        // Wrong Answer
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game Over - lost
            gameOver(false, `Game Over , you lost. The correct number was ${winningNum}`);

        } else {
            // Game Continues - answer wrong

            // Change brder color
            guessInput.style.borderColor = 'red';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red');
        }

    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = color;

    // Set text color
    message.style.color = color;

    //Set main border color
    bodyele.style.borderColor = color;
    console.log(bodyele.style.borderColor);

    // Set Message
    setMessage(msg);

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}