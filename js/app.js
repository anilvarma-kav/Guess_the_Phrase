/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
document.getElementById("btn__reset").addEventListener('click', function () {
    //Creating new game object
    document.querySelector('#phrase > ul').innerHTML = "";
    let keys = document.querySelectorAll('#qwerty > div > button');
    for(let i = 0; i < keys.length; i++){
        keys[i].className = 'key';
        keys[i].disabled = false;
    }
    let hearts = document.querySelectorAll('.tries > img');
    for(let i=0; i<hearts.length; i++){
        hearts[i].src = "Images/liveHeart.png";
    }
    game = new Game();
    game.startGame();



});

document.getElementById('qwerty').addEventListener('click', function (e) {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);

    }


});