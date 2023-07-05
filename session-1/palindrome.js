/*
Homework
Write a function called isPalindrome, that when given a string input, 
returns True if the string input is a palindrome, else False.
A palindrome is a word that, when reversed, is the same word. 
Examples include racecar, deified, civic, radar, uwu, et al.
*/


function isPalindrome(word) {
  const lowerCaseReversedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedWord = lowerCaseReversedWord.split('').reverse().join('')
    return lowerCaseReversedWord === reversedWord

}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("deified"));  // true
console.log(isPalindrome("civic"));    // true
console.log(isPalindrome("radar"));    // true
console.log(isPalindrome("uwu"));    // true
console.log(isPalindrome("Uwu"));    // true
console.log(isPalindrome("Taco cat"));    // true
console.log(isPalindrome("angelo"));    // false