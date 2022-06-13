class Player {
    constructor(name, token) {
        this.name = name; 
        this.token = token;
        this.wins = 0;
        this.currentSelection;
        this.gameType = 'Classic';
        this.characters = ['fire', 'earth', 'water'];
    }

    takeTurn(event) {
        this.currentSelection = event.target.id;
    }
}
