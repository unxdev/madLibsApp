// Declarations
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
    let insertValue = prompt('Enter a ' + questionArray[i]  + ` (${numberOfQuestions - questionCounter} questions left)`);
    let iterate = true;

    while (iterate) {
        if(insertValue.length === 0 || insertValue === undefined){
            console.log('Please entered a value');
            insertValue = prompt('Please!! Enter a ' + questionArray[i]  + ` (${numberOfQuestions - questionCounter} questions left)`);
        }else{
            iterate = false;
            break;
        }
    }
    userInputs.push(insertValue);
    console.log(userInputs.length);
}


let newStory = `<h1>A Beautiful Story</h1>
<h2>${userInputs[1]} was the man who invented the ${userInputs[4]}.
<br>He was born in ${userInputs[5]} on 3 March 1847. </h2>

<h2>He was educated at ${userInputs[5]} High School, ${userInputs[5]} University, and the University of ${userInputs[6]}. </h2>

<h2>Later ${userInputs[1]} moved to the ${userInputs[7]} and in 1872 he opened a school for training teachers of the deaf in Boston. </h2>

<h2>${userInputs[2]} experimented with ways of using electricity to transmit ${userInputs[0]}, ${userInputs[12]} by his assistant ${userInputs[3]} and in 1876 he patented the ${userInputs[4]}.
<br>He also invented a way to transmit ${userInputs[0]} using vibrations in a beam of light.</h2>

<h2>${userInputs[1]} also carried out experiments in many other subjects and in 1898 he became ${userInputs[8]} of the National Geographical Society.
<br>He was also interested in the problem of ${userInputs[9]} and experimented with ${userInputs[10]}.</h2>

<h2>${userInputs[2]} married a deaf woman in 1877 and they had four ${userInputs[11]}. ${userInputs[2]} became a US citizen in 1882 but in 1855 he ${userInputs[13]} a summer home in Nova Scotia.   
<br>There is a crater on the Moon named after ${userInputs[2]}.</h2>`;


alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

// for debugging purposes
/* originalWords = [
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
]; */

console.log('### NEW Story ');
console.log(newStory);
let divOutput = document.querySelector('div.newStory');
divOutput.innerHTML = newStory;