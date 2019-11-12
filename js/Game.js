/* Anil Varma Keerthipati
 * Project - Guess_The_Phrase
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null';
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases(){
        const phrase1 = new Phrase('A chip on Your Shoulder');
        const phrase2 = new Phrase('A Dime a Dozen');
        const phrase3 = new Phrase('A Fool and His Money Are Soon Parted');
        const phrase4 = new Phrase('A Piece of Cake');
        const phrase5 = new Phrase('An Arm and a Leg');
        const phrase6 = new Phrase('Beating Around the Bush');
        const phrase7 = new Phrase('Curiosity Killed The Cat');
        const phrases = [phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7];
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const len = this.phrases.length;
        const randIndex = Math.floor(Math.random() * len);
        return this.phrases[randIndex];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = "none";
        const randomPhrase = this.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
    };
}