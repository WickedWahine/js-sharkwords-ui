'use strict';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {
  
  const wordContainer = document.querySelector('#word-container');

  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend',`<div class="letter-box ${letter}"></div>`);
  };
};

// Loop over each letter in the alphabet and generate a button
// for each letter
//
const generateLetterButtons = () => {
  
  const letterButtons = document.querySelector(#letter-buttons);

  for (letter of ALPHABET) {
    letterButtons.insertAdjacentHTML('afterbegin',`<button>${letter}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  
  buttonEl.disabled = true;

};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works
//
const isLetterInWord = (letter) => {
  // Replace this with your code
};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because 
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter

})();

createDivsForChars('apple');
generateLetterButtons();
