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
 }
