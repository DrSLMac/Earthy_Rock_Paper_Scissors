class Player {
    constructor(name, token) {
        this.name = name; 
        this.token = token;
        this.wins = 0;
        this.currentSelection;
    }

    takeTurn(event) {
        this.currentSelection = event.target.id;
    }
}
