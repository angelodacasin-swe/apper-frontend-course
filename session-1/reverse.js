/*
Homework
Write a function named reverse that, when given an input string, returns the reversed version of that string. 
Use traditional for loop.
function reverse(word) {
}// ... some logic here
const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'
*/

function reverse(word) {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  
  return reversedWord;
}

const word = 'hello';
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'


/* 
ALTERNATIVE SOLUTION:
-- if we will not use traditional for loops).

function reverse(word) {
  const reversedWord = word 
    // convert string to an array
    .split('')
    // reverse the letters in the array
    .reverse()
    // join the letters in the array so that it becomes a string again
    .join('');

  return reversedWord;
}

// declare a constant variable 'word' that has the value 'hello'
const word = 'hello';
// call the 'reverse' function and apply it to the 'word' variable
const reversedWord = reverse(word);
// 'olleh'
console.log(reversedWord);
*/