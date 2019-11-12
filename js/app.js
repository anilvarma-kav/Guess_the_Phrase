/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
const game = new Game();
game.phrases.forEach((phrase, index)=>{
    console.log(`Phrase ${index} -  ${phrase.phrase}`);
});
*/

/*const game =  new Game();
console.log(game.getRandomPhrase());*/


/*const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();*/

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//For gaem Object
let game;
document.getElementById("btn__reset").addEventListener('click', function () {
    //Creating new game object
    game = new Game();
    game.startGame();
});
