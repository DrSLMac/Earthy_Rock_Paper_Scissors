// 👇🏽 Global variables
var game = new Game();

// 👇🏽 Query Selectors
var gameOptions = document.querySelector(".game-options");
var classicGameButton = document.querySelector(".classic-game-box");
var challengeGameButton = document.querySelector(".challenge-game-box");
var chooseGame = document.querySelector(".choose-game");
var chooseYourWeapon = document.querySelector(".choose-weapon");
var showResults = document.querySelector(".show-results");
var classicWeapons = document.querySelector(".classic-weapons");
var challengeWeapons = document.querySelector(".challenge-weapons");
var icon = document.querySelector(".icon");
var changeGameButton = document.querySelector(".change-game-button");
var computerDecision = document.querySelector(".computer-decision");
var humanDecision = document.querySelector(".human-decision");
var displayResults = document.querySelector(".result");
var computerWins = document.querySelector(".computer-wins");
var humanWins = document.querySelector(".human-wins");

// 👇🏽 Event Listeners
classicGameButton.addEventListener('click', goToClassicGame);
challengeGameButton.addEventListener('click', goToChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicWeapons.addEventListener('click', playGame);
challengeWeapons.addEventListener('click', playGame)


// 👇🏽 Functions 

function playGame(event) {
    game.human.takeTurn(event);
    game.getComputerChoice();
    game.updatePlayerChoice();
    game.determineWinner();
}

function returnToGame() {
    if (game.type === 'Classic') {
        setTimeout(goToClassicGame, 3000);
    } else {
        setTimeout(goToChallengeGame, 3000);
    }
}

function goToClassicGame() {
    game.type = 'Classic';
    showResults.classList.remove('hidden');
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
    chooseYourWeapon.classList.add('hidden');
    gameOptions.classList.add('hidden');
    chooseGame.classList.remove('hidden');
    classicWeapons.classList.remove('hidden');
    changeGameButton.classList.remove('hidden');
    // game.type = 'Challenge';
    // hideElement(displayResults);
    // hideElement(showResults);
    // hideElement(chooseYourWeapon);
    // hideElement(gameOptions);
    // viewElement(chooseGame);
    // viewElement(changeGameButton);
    // viewElement(classicWeapons);
    // viewElement(challengeWeapons);
    game.chooseWeapons();
}

function viewChoices(humanDecision, computerDecision) {
    hideElement(chooseGame);
    hideElement(classicWeapons);
    hideElement(challengeWeapons);
    viewElement(displayResults);
    showResults.innerHTML = "";
    showResults.innerHTML +=
    `<section class="human-decision" id="humanDecision">
    <img id=${humanDecision} src='./assets/${humanDecision}.png' alt='${humanDecision} icon'>
  </section>
  <section class="computer-decision" id="computerDecision">
    <img id=${computerDecision} src='./assets/${computerDecision}.png' alt='${computerDecision} icon'>
  </section>

    `
}

// function viewElement(element) {
//     element.classList.remove('hidden');
// }

// function hideElement(element) {
//     element.classList.add('hidden');
// }

    // hideElement(displayResults);
    // hideElement(showResults);
    // hideElement(chooseYourWeapon);
    // hideElement(gameOptions);
    // viewElement(chooseGame);
    // viewElement(classicWeapons);
    // viewElement(changeGameButton);
