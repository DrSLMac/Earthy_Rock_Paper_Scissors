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
var tokenButton = document.querySelector(".token-button");
var icon = document.querySelector(".icon");
var scoreResetButton = document.querySelector(".score-reset-button");
var showResults = document.querySelector(".show-results");
var userIcon = document.querySelector(".token");
var winsCalculator = document.querySelector(".wins-calculator");
var loader = document.querySelector(".pre-loader");
var main = document.querySelector(".main");

// 👇🏽 Event Listeners
challengeGameButton.addEventListener('click', goToChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicGameButton.addEventListener('click', goToClassicGame);
classicWeapons.addEventListener('click', playGame);
challengeWeapons.addEventListener('click', playGame);
tokenButton.addEventListener('click', changeUserToken);
scoreResetButton.addEventListener('click', resetScore);

// 👇🏽 Functions 
function viewElement(element) {
    element.classList.remove('hidden');
}

function hideElement(element) {
    element.classList.add('hidden');
}

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'flex';
        setTimeout(() => (main.style.opacity = 1), 2000);
    }, 18000);
}

init();

function classicGameView() {
    hideElement(showResults);
    hideElement(displayResults);
    hideElement(gameOptions);
    hideElement(chooseGame);
    viewElement(chooseYourWeapon);
    viewElement(classicWeapons);
    viewElement(changeGameButton);
}

function goToClassicGame() {
    game.type = 'Classic';
    game.chooseWeapons();
    classicGameView();
}

function goToChallengeGame() {
    game.type = 'Challenge';
    viewElement(challengeWeapons);
    classicGameView();
    game.chooseWeapons();
}

function playGame(event) {
    game.human.takeTurn(event);
    game.getComputerChoice();
    game.updatePlayerChoice();
    game.determineWinner();
}

function viewChoices(humanDecision, computerDecision) {
    hideElement(chooseGame);
    hideElement(classicWeapons);
    hideElement(challengeWeapons);
    hideElement(chooseYourWeapon);
    viewElement(displayResults);
    viewElement(showResults);
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
    viewElement(displayResults);
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
    hideElement(classicWeapons);
    hideElement(challengeWeapons);
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
    if (game.human.wins === 0 && game.computer.wins === 0) {
        hideElement(scoreResetButton);
    } else {
        viewElement(scoreResetButton);
    }
}

function resetScore() {
    game.resetScore();
    updateScore();
    hideElement(scoreResetButton);
}

function returnToHomePage(event) {
    event.preventDefault();
    hideElement(showResults);
    hideElement(changeGameButton);
    hideElement(classicWeapons);
    hideElement(challengeWeapons);
    hideElement(chooseYourWeapon);
    viewElement(gameOptions);
    viewElement(chooseGame);
    showResetScoreButton();
}

function changeUserToken() {
    game.changeUserAvatar();
    userIcon.src = game.human.token;
}

