/**
 * Guess The Phrase
 * Anil Varma Keerthipati
 * app.js
 **/

let game = null;
/**
 * Resetting the gameboard everytim eplayer hits start game button
 */
function resetGameBoard() {
    //Removing all li elelmnts inside Phrase ul element
    document.querySelector('#phrase > ul').innerHTML = "";
    //Enable all of the onscreen keyboard buttons and update each to use the key CSS class
    let keys = document.querySelectorAll('#qwerty > div > button');
    for(let i = 0; i < keys.length; i++){
        keys[i].className = 'key';
        keys[i].disabled = false;
    }
    //Resetting all heart images
    let hearts = document.querySelectorAll('.tries > img');
    for(let i=0; i<hearts.length; i++){
        hearts[i].src = "Images/liveHeart.png";
    }
}
function keyCliked(e) {
    //If the clicked element is a button
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target)
    }
}

/**
 * This function first checks first checks if the game is already started then
 * it checks if the key pressed is a letter and then
 * checks if a button exists with key pressed and
 * if yes then that button is passed as parameter to handleInteraction() method
 */

function keyPressed(e) {
    if(document.getElementById('overlay').style.display === "none") {
        let keys = document.querySelectorAll('#qwerty > div > button');
        if (e.code.startsWith('Key')) {
            let key = e.code.slice(-1).toLowerCase();
            let button = null;
            for (let i = 0; i < keys.length; i++) {
                if (key === keys[i].textContent) {
                    if (!keys[i].disabled) {
                        button = keys[i];
                        console.log(button);
                        game.handleInteraction(button);
                    }
                }
            }
        }
    }

}

//If start Game button clicked
document.getElementById("btn__reset").addEventListener('click', function () {
    resetGameBoard();
    //Creating new game object
    game = new Game();
    game.startGame();
});


//Everytime a button is clicked in the game dashboard 'keyClicked' method will be called
document.getElementById('qwerty').addEventListener('click', keyCliked);


////Everytime a key is pressed from keyboard in game dashboard 'keyPressed' method will be called
document.addEventListener('keydown', keyPressed);




