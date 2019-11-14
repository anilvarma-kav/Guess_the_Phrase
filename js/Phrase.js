/**
 * Guess The Phrase
 * Anil Varma Keerthipati
 * Phrase.js
 **/

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        let html = ``;
        for (let i = 0 ; i < this.phrase.length; i++){
            if(this.phrase[i] === ' '){
                html += `<li class = "space"> </li>`;
            }
            else{
                html += `<li class="hide letter ${this.phrase[i]}"> ${this.phrase[i]} </li>`;
            }
        }
        document.querySelector('#phrase ul').innerHTML = html;
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if(this.phrase.indexOf(letter) > -1){
            //this.showMatchedLetter(letter);
            return true;
        }
        else{
            return false;
        }
    };
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        var selectedLetter = document.getElementsByClassName(letter);
        for(let i =0; i<selectedLetter.length; i++){
            selectedLetter[i].classList.replace('hide', 'show');
        }

    };
}
