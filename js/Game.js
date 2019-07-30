/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }
   /*
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the  game
   */
createPhrases() {
  let phraseLi = [
    new Phrase ('A penny for your thoughts'),
    new Phrase ('Actions speak louder than words'),
    new Phrase ('Make a long story short'),
    new Phrase ('It takes two to tango'),
    new Phrase ('Hit the nail on the head')];
    return phraseLi;

};
  /*
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    let i = Math.floor(Math.random() * this.phrases.length);
    let randomPhrase = this.phrases[i];
    return randomPhrase;
  };
  startGame(){
    //hides overlay screen
    document.getElementById('overlay').style.display = 'none';
    //Gets a random phrase and displays it
    let displayedPhrase = this.getRandomPhrase()
    displayedPhrase.addPhraseToDisplay();
    //stores selected phrase into Game's 'activePhrase' property
    this.activePhrase = displayedPhrase;
  }
  resetGame(){
    const phrase = document.querySelector('#phrase');
    const ul = document.querySelector('ul');
    const keys = document.querySelectorAll('.key');
    const button = event.target;
    const lives = document.querySelectorAll('.tries img')
    //Removes li elements
    phrase.removeChild(ul);
    //enables onscreen keyboard buttons and update each to use the 'key' css class, removes 'chosen' and 'wrong classes'

    for (let i = 0; i < keys.length; i++){
      keys[i].className = 'key';
    // keys.classList.remove('wrong', 'chosen');
  }
    for (let i = 0; i < lives.length; i++){
      lives[i].setAttribute('src', 'images/liveHeart.png')
    }
    button.disabled = false;
    console.log(keys)
}
    // let li = document.querySelectorAll('li');
    // let keys = document.querySelectorAll('.key')
    // for (let i = 0; i < keys.length; i++){
    //   // keys[i].classList.remove('wrong', 'chosen')
    //   keys[i].className = 'key'
    //
    // }

    //resets all heart images to liveHeart.png

  /* Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won */
  checkForWin() {
  const hiddenLetters = document.querySelectorAll('.letter')
    if (hiddenLetters.length === 0){
      return true;
    }
    else {
      return false;
    }
  };

  removeLife() {
    let lives = document.querySelectorAll('.tries img');
    // Increases the value of the missed property
    this.missed += 1;
    // Removes a life from the scoreboard
    for (let i = 0; i < lives.length; i++){
      if (lives[i].src.includes('images/liveHeart.png') && this.missed == i){
        lives[i].setAttribute('src', 'images/lostHeart.png')
      }
    }
    /*Checks if player has remaining lives and ends game if player is out */
    if (this.missed === 5){
      this.gameOver();
    }
  }
  /*
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    //Shows original start screen
    document.getElementById('overlay').style.display = 'block';
    const gameOverMessage = document.getElementById('game-over-message');
    const startClass = document.querySelector('.start');
    if (gameWon){
      gameOverMessage.style.display = 'block';
      startClass.className = 'win';
      gameOverMessage.textContent = 'Congratulations, you\'re awesome!'
    }
    else {
      startClass.className = 'lose';
      gameOverMessage.textContent = 'Sorry, try again next time!'
    }
  };
  /*
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button){
    button = event.target;
    //Gets the letter from the phrase
    let letterText = button.textContent;
    let activePhraseStr = this.activePhrase.phrase;
    //Disables the selected letter’s onscreen keyboard button.
    button.disabled = true;
    if (activePhraseStr.includes(letterText) === false) {
      button.className = 'wrong';
      this.removeLife();
    }
    /*Adds the class 'chosen' to mark the correctly guessed letter, calls the showMatchedLetter() method to display on the board, checks for a win and calls gameover if the game is won*/
    else if (activePhraseStr.includes(letterText)){
      button.className = 'chosen';
      this.activePhrase.showMatchedLetter(letterText);
      if (this.checkForWin()){
        this.gameOver(true);
      }
    }
  }
}
