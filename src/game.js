class Game {
    constructor(gameChoice) {
        this.type = gameChoice;
        this.weapons = [];
        this.human = new Player('Human', '🧘🏼');
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
}