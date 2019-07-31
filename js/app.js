/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const resetButton = document.getElementById('btn__reset')
resetButton.addEventListener('click', function(){
  game = new Game;
  game.startGame();
  game.resetGame();
})

let keysParent = document.getElementById('qwerty')
keysParent.addEventListener('click', function(event){
  /*Insures only button elements call the handleInteraction() method - source: CSStricks.com*/
  if (event.target.tagName === 'BUTTON'){
  game.handleInteraction()
}
})
//fs
