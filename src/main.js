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
var scoreResetButton = document.querySelector(".score-reset-button");
var computerDecision = document.querySelector(".computer-decision");
var humanDecision = document.querySelector(".human-decision");
var displayResults = document.querySelector(".result");
var computerWins = document.querySelector(".computer-wins");
var humanWins = document.querySelector(".human-wins");
var winsCalculator = document.querySelector(".wins-calculator")

// 👇🏽 Event Listeners
classicGameButton.addEventListener('click', goToClassicGame);
challengeGameButton.addEventListener('click', goToChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicWeapons.addEventListener('click', playGame);
challengeWeapons.addEventListener('click', playGame);
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
  </section>
    `;
    displayWinner();
}

function displayWinner() {
    displayResults.classList.remove('hidden');
    if (game.winner === "Human") {
        game.human.wins += 1;
        displayResults.innerText = " 🎊 🎉 🪅 HUMAN WINS! 🪅 🎉 🎊 ";
        humanWins.innerHTML = 'wins: ' + game.human.wins;
    } else if (game.winner === "Computer") {
        game.computer.wins += 1;
        displayResults.innerText = " 🤖 🦾 🖥 COMPUTER WINS! 🖥 🦾 🤖 ";
        computerWins.innerHTML = 'wins: ' + game.computer.wins;
    } else {
        game.winner = 'tie';
        displayResults.innerText = " 🪢 IT'S A DRAW! 🪢 ";
    }
    classicWeapons.classList.add("hidden");
    challengeWeapons.classList.add("hidden");
    returnToGame();
}

function returnToGame() {
    if (game.type === 'Classic') {
        setTimeout(goToClassicGame, 2500);
    } else {
        setTimeout(goToChallengeGame, 2500);
    }
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
}

function resetScore() {
    if (game.human.wins > 0 || game.computer.wins > 0) {
        game.human.wins = 0;
        game.computer.wins = 0;
    } else {
        alert('You have to play the game first before you can reset the score!')
    }
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

        // game.type = 'Challenge';
    // hideElement(displayResults);
    // hideElement(showResults);
    // hideElement(chooseYourWeapon);
    // hideElement(gameOptions);
    // viewElement(chooseGame);
    // viewElement(changeGameButton);
    // viewElement(classicWeapons);
    // viewElement(challengeWeapons);
