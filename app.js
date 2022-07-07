// Declarations

// the original story for reference
const originalStory = `
<p>Alexander Graham Bell was the man who invented the telephone.
<br>He was born in Edinburgh on 3 March 1847.</p> 

<p>He was educated at Edinburgh High School, Edinburgh University, and the University of London.</p> 

<p>Later Alexander Graham Bell moved to the USA and in 1872 he opened a school for training teachers of the deaf in Boston.</p> 

<p>Bell experimented with ways of using electricity to transmit sound, helped by his assistant Thomas Watson and in 1876 he patented the telephone. 
<br>He also invented a way to transmit sound using vibrations in a beam of light.</p>

<p>Alexander Graham Bell also carried out experiments in many other subjects and in 1898 he became President of the National Geographical Society. 
<br>He was also interested in the problem of mechanical flight and experimented with kites.</p>

<p>Bell married a deaf woman in 1877 and they had four children. Bell became a US citizen in 1882 but in 1855 he purchased a summer home in Nova Scotia. 
<br>There is a crater on the Moon named after Bell.</p>`;


// questions to the player
let questionArray = [
    'anything you can express',
    'propper noun (first and last name)',
    'nickname for the previous entry',
    'propper noun 2 (first and last name)',
    'object',
    'city',
    'other city',
    'country',
    'something like: title, position, degree...',
    'Science field',
    'object',
    'something like: baby, child...', 
    'past tense verb',
    'again... past tense verb'
];

//the values entered by the player
let userInputs = []; 
// number of words to replace
const numberOfQuestions = questionArray.length;

// bucle for inputs
let questionCounter = 0;
for (let i = 0; i < numberOfQuestions; i++) {
    questionCounter++;
    console.log(questionArray[i] + `(${numberOfQuestions - questionCounter} questions left)`);
}


let newStory = `<p>${userInputs[1]} was the man who invented the ${userInputs[4]}.
<br>He was born in ${userInputs[5]} on 3 March 1847. </p>

<p>He was educated at ${userInputs[5]} High School, ${userInputs[5]} University, and the University of ${userInputs[6]}. </p>

<p>Later ${userInputs[1]} moved to the ${userInputs[7]} and in 1872 he opened a school for training teachers of the deaf in Boston. </p>

<p>${userInputs[2]} experimented with ways of using electricity to transmit ${userInputs[0]}, ${userInputs[12]} by his assistant ${userInputs[3]} and in 1876 he patented the ${userInputs[4]}.
<br>He also invented a way to transmit ${userInputs[0]} using vibrations in a beam of light.</p>

<p>${userInputs[1]} also carried out experiments in many other subjects and in 1898 he became ${userInputs[8]} of the National Geographical Society.
<br>He was also interested in the problem of ${userInputs[9]} and experimented with ${userInputs[10]}.</p>

<p>${userInputs[2]} married a deaf woman in 1877 and they had four ${userInputs[11]}. ${userInputs[2]} became a US citizen in 1882 but in 1855 he ${userInputs[13]} a summer home in Nova Scotia.   
<br>There is a crater on the Moon named after ${userInputs[2]}.</p>`;


// for debugging purposes
originalWords = [
    'sound',
    'Alexander Graham Bell',
    'Bell',
    'Thomas Watson',
    'telephone',
    'Edinburgh',
    'London',
    'USA',
    'President',
    'mechanical flight',
    'kites',
    'children',
    'helped',
    'purchased'
];

userInputs = originalWords;

console.log('### NEW Story ');
console.log(newStory);
console.log('### originalStory ');
console.log(originalStory);
let divOutput = document.querySelector('div.newStory');
divOutput.innerHTML = newStory;
let original = document.querySelector('div.original');
original.innerHTML = originalStory; 