/**
 * Guess The Phrase
 * Anil Varma Keerthipati
 * Game.js
 **/

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
        const phrase8 = new Phrase('Kick the Bucket');
        const phrase9 = new Phrase('Breathing down my neck');

        const phrases = [phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8, phrase9];
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
    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
     won
     */
    checkForWin() {
        var hiddenLetters = document.getElementsByClassName('hide');
        if(hiddenLetters.length === 0)
            return true;
        else{
            return false;
        }

    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        this.missed += 1;
        var lives = document.getElementsByClassName('tries');
        lives[this.missed-1].firstElementChild.src = "Images/lostHeart.png";
        if(this.missed === 5){
            this.gameOver(false);
        }

    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        var overlay = document.getElementById('overlay');
        overlay.style.display = "";
        if(gameWon){
            document.querySelector('#overlay > h1').textContent = "You Won The Game";
            overlay.className = "win";
        }
        else{
            document.querySelector('#overlay > h1').textContent = "Bummer, You lost all your Lives. Please try again ";
            overlay.className = "lose";
        }
    }
    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;
        var selectedLetter = button.textContent;
        if(this.activePhrase.checkLetter(selectedLetter)){
            button.className = "chosen";
            this.activePhrase.showMatchedLetter(selectedLetter);
            if(this.checkForWin()){
                this.gameOver(true);
            };
        }
        else{
            button.className = "wrong";
            this.removeLife();
        }
    };


}