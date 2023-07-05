/*
Homework
Write a function that returns only vowels with a given input string. Name this function convertToVowels.
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word) 
console.log(wordWithOnlyVowels)
// iioeo
*/

function convertToVowels(word) {
  const wordWithOnlyVowels = word.match(/[aeiou]/g) // variable 'wordWithOnlyVowels' contains an array containing vowels.
    .join('') // this will convert the resulting array to a string
  
  if(wordWithOnlyVowels) {
      return wordWithOnlyVowels
  } else {
      return "There are no vowels found in the string."
  }
}

const word = 'thisissomeword' // variable 'word' contains the string 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word) // perform the function on 'convertToVowels' and apply it on the word variable. Assign it then to the 'wordWithOnlyVowels' variable
console.log(wordWithOnlyVowels) // 'iioeo'