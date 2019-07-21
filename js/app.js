/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const game;
const resetButton = document.getElementById('btn__reset')
resetButton.addEventListener('click', function(){
  game = new Game;
  game.startGame();
})
