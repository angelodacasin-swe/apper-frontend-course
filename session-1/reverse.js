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
  let reversedWord = ''

  for (let i = word.length -1; i >= 0; i--) {
    reversedWord += word[i]
  }
  
  return reversedWord
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'


/* ALTERNATIVE if we will not use loops.

function reverse(word) {
  const reversedWord = word // assign the value of 'word' to 'reversedWord'
  .split('') // convert string to an array
  .reverse('') // reverse the letters in the array
  .join('') // join the letters in the array so that it becomes a string again
  return reversedWord
}

const word = 'hello' // declare a constant variable 'word' that has the value 'hello'
const reversedWord = reverse(word) // call the 'reverse' function and apply it the 'word' variable
console.log(reversedWord) // print the result of 'reversedWord. The result should be 'olleh'

*/