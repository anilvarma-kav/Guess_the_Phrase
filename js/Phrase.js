/* Anil Varma Keerthipati
 * Project - Guess_The_Phrase
 * Phrase.js */
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
}
