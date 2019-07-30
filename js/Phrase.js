/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase()
   }
   //Display phrase on game board
   addPhraseToDisplay(){
     //creates and appends new ul element to the new div element
     let ulParent = document.getElementById('phrase');
     let divParent = document.querySelector('.main-container');
     let div = document.createElement('div');
     let ul = document.createElement('ul');
     ulParent.appendChild(ul);
     divParent.appendChild(div);
     //Split phrase to separate each letter
     let letters = this.phrase.split('');
     /*loops through phrases to create list elements, append them to the ul, and set their text content to the text of that respective letter*/
     for (let i = 0; i <letters.length; i++){
       let li = document.createElement('li');
       ul.appendChild(li);
       li.textContent += letters[i];
       /*Assigns a class name based on whether the list item
       contains a space or a letter.*/
       if (li.textContent === " "){
         li.className = 'space'
       }
       else {
         li.className = `hide letter ${letters[i]}`

       }
   }
   }
   /* Checks if passed letter is in phrase
 * @param (string) letter - Letter to check */
   checkLetter(letter){
     if (this.phrase.includes(letter)){
       return true;
     }
     else {
       return false;
     }
   }
/* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
   showMatchedLetter(letter){
     if (this.checkLetter){
      let matchedLetters = document.querySelectorAll(`.${letter}`);
			for (let i = 0; i < matchedLetters.length; i++) {
				matchedLetters[i].className = 'show';
       }
     }
   }
 };
