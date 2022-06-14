// 👇🏽 Global variables
var game = new Game();

// 👇🏽 Query Selectors
var gameOptions = document.querySelector(".game-options");
var challengeGameButton = document.querySelector(".challenge-game-box");
var challengeWeapons = document.querySelector(".challenge-weapons");
var changeGameButton = document.querySelector(".change-game-button");
var chooseGame = document.querySelector(".choose-game");
var chooseYourWeapon = document.querySelector(".choose-weapon");
var classicGameButton = document.querySelector(".classic-game-box");
var classicWeapons = document.querySelector(".classic-weapons");
var computerDecision = document.querySelector(".computer-decision");
var computerWins = document.querySelector(".computer-wins");
var displayResults = document.querySelector(".result");
var humanDecision = document.querySelector(".human-decision");
var humanWins = document.querySelector(".human-wins");
var iconButton = document.querySelector(".icon-button");
var icon = document.querySelector(".icon");
var scoreResetButton = document.querySelector(".score-reset-button");
var showResults = document.querySelector(".show-results");
var userIcon = document.querySelector(".token")
var winsCalculator = document.querySelector(".wins-calculator")

// 👇🏽 Event Listeners
challengeGameButton.addEventListener('click', goToChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicGameButton.addEventListener('click', goToClassicGame);
classicWeapons.addEventListener('click', playGame);
challengeWeapons.addEventListener('click', playGame);
iconButton.addEventListener('click', changeUserIcon);
scoreResetButton.addEventListener('click', resetScore);

// 👇🏽 Functions 

function playGame(event) {
    game.human.takeTurn(event);
    game.getComputerChoice();
    game.updatePlayerChoice();
    game.determineWinner();
}

function goToClassicGame() {
    game.type = 'Classic';
    showResults.classList.add('hidden');
    displayResults.classList.add('hidden');
    chooseYourWeapon.classList.remove('hidden');
    gameOptions.classList.add('hidden');
    chooseGame.classList.add('hidden');
    classicWeapons.classList.remove('hidden');
    changeGameButton.classList.remove('hidden');
    game.chooseWeapons();

}

function goToChallengeGame() {
    game.type = 'Challenge';
    showResults.classList.add('hidden');
    displayResults.classList.add('hidden');
    chooseYourWeapon.classList.remove('hidden');
    gameOptions.classList.add('hidden');
    chooseGame.classList.add('hidden');
    classicWeapons.classList.remove('hidden');
    challengeWeapons.classList.remove('hidden')
    changeGameButton.classList.remove('hidden');
    game.chooseWeapons();
}

function viewChoices(humanDecision, computerDecision) {
    chooseGame.classList.add('hidden');
    classicWeapons.classList.add('hidden');
    challengeWeapons.classList.add('hidden');
    displayResults.classList.remove('hidden');
    chooseYourWeapon.classList.add('hidden');
    showResults.classList.remove('hidden');
    showResults.innerHTML = "";
    showResults.innerHTML +=
    `<section class="choice humanDecision" id="humanDecision">
        <img id=${humanDecision} src='assets/element-${humanDecision}.svg' alt='${humanDecision} icon'>
    </section>
     <section class="choice computerDecision" id="computerDecision">
        <img id=${computerDecision} src='assets/element-${computerDecision}.svg' alt='${computerDecision} icon'>
     </section>`;
    displayWinner();
}

function displayWinner() {
    displayResults.classList.remove('hidden');
    if (game.winner === "Human") {
        game.human.wins += 1;
        displayResults.innerText = " 🎊 🎉 🪅 HUMAN WINS! 🪅 🎉 🎊 ";
    } else if (game.winner === "Computer") {
        game.computer.wins += 1;
        displayResults.innerText = " 🤖 🦾 🖥 COMPUTER WINS! 🖥 🦾 🤖 ";
    } else {
        game.winner = 'tie';
        displayResults.innerText = " 🪢 IT'S A DRAW! 🪢 ";
    }
    updateScore();
    returnToGame();
    showResetScoreButton();
    classicWeapons.classList.add("hidden");
    challengeWeapons.classList.add("hidden");
}

function updateScore() {
    humanWins.innerText = `wins: ${game.human.wins}`;
    computerWins.innerText = `wins: ${game.computer.wins}`;
};

function returnToGame() {
    if (game.type === 'Classic') {
        setTimeout(goToClassicGame, 2500);
    } else {
        setTimeout(goToChallengeGame, 2500);
    }
}

function showResetScoreButton() {
    console.log(game.human.wins);
    console.log(game.computer.wins);
    if (game.human.wins === 0 && game.computer.wins === 0) {
        scoreResetButton.classList.add("hidden");
    } else {
    scoreResetButton.classList.remove('hidden');
    }
}

function resetScore() {
    game.resetScore();
    updateScore();
    scoreResetButton.classList.add('hidden');
}

function returnToHomePage(event) {
    event.preventDefault();
    showResults.classList.add('hidden');
    changeGameButton.classList.add('hidden');
    classicWeapons.classList.add('hidden');
    challengeWeapons.classList.add('hidden');
    gameOptions.classList.remove('hidden')
    chooseYourWeapon.classList.add('hidden');
    chooseGame.classList.remove('hidden');
    showResetScoreButton();
}

function changeUserIcon() {
    game.changeUserAvatar();
    userIcon.src = game.human.token;
}

