class Game {
    constructor(gameChoice) {
        this.type = gameChoice;
        this.weapons = [];
        this.human = new Player('Human', './assets/person1.png');
        this.computer = new Player('Computer', '💻');
        this.humanDecision = this.humanDecision;
        this.computerDecision = this.computerDecision;
        this.winner;
    }

    chooseWeapons() {
        if (this.type === 'Classic') {
            this.weapons = ['fire', 'earth', 'water'];
        } else if (this.type === 'Challenge') {
            this.weapons = ['fire', 'earth', 'water', 'wind', 'ether'];
        }
    }

    getComputerChoice() {
        this.computerDecision = this.weapons[Math.floor(Math.random() * this.weapons.length)];
    }

    updatePlayerChoice() {
        this.humanDecision = this.human.currentSelection;
    }

    determineWinner() {
        if (this.humanDecision === this.computerDecision) {
            this.winner = 'tie';
        } else if (
            (this.humanDecision === 'fire' && this.computerDecision === 'earth') ||
            (this.humanDecision === 'fire' && this.computerDecision === 'water') ||
            (this.humanDecision === 'earth' && this.computerDecision === 'water') ||
            (this.humanDecision === 'earth' && this.computerDecision === 'wind') ||
            (this.humanDecision === 'water' && this.computerDecision === 'wind') ||
            (this.humanDecision === 'water' && this.computerDecision === 'ether') ||
            (this.humanDecision === 'wind' && this.computerDecision === 'ether') ||
            (this.humanDecision === 'wind' && this.computerDecision === 'fire') ||
            (this.humanDecision === 'ether' && this.computerDecision === 'fire') ||
            (this.humanDecision === 'ether' && this.computerDecision === 'earth') 
        ) {
            this.winner = 'Human';
        } else {
            this.winner = 'Computer';
        }
        viewChoices(this.humanDecision, this.computerDecision);
    }

    changeUserAvatar() {
        if (this.human.token === `./assets/person1.png`) {
            this.human.token = `./assets/person2.png`;
        } else if (this.human.token === `./assets/person2.png`) {
            this.human.token = `./assets/person3.png`;
        } else if (this.human.token === `./assets/person3.png`) {
            this.human.token = `./assets/person4.png`;
        } else if (this.human.token === `./assets/person4.png`) {
            this.human.token = `./assets/person5.png`;
        } else if (this.human.token === `./assets/person5.png`) {
            this.human.token = `./assets/person6.png`;
        } else if (this.human.token === `./assets/person6.png`) {
            this.human.token = `./assets/person7.png`;
        } else if (this.human.token === `./assets/person7.png`) {
            this.human.token = `./assets/person8.png`;
        } else if (this.human.token === `./assets/person8.png`) {
            this.human.token = `./assets/person1.png`;
        } 
    }

    resetScore() {
        this.human.wins = 0;
        this.computer.wins = 0;
    }
}
