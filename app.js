const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#pScore1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#pScore2')
}


const resetButton = document.querySelector('#reset');
const maxScoreSelector = document.querySelector('#toScore');
let isGameOver = false;
let maxScore = 3;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score == maxScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('text-success', 'text-danger');
    }
}

maxScoreSelector.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    reset();
})

player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
})

resetButton.addEventListener('click', reset);




