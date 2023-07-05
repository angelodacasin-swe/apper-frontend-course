/*
Homework
Write a function named transform that accepts an array of integers, 
and returns an array in which all the elements are squared and sorted in ascending order.
const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums) console.log(sortedSquaredNums)
// [9,16,25,64,81]
*/

function transform(array) {
  const sortedSquaredNumbers = array // declare a new variable named 'sortedSquaredNumbers'
    .map(number => number ** 2) // use 'map' method that for each number in the array, it will be squared.
    .sort((a, b) => a - b); // use 'sort' method to create a comparison function that will compare the value of a and b and sort it. 

  return sortedSquaredNumbers; // after having applied all methods under the array, return 'sortedSquaredNumbers'.
}

const numbers = [4, 9, 5, 3, 8]; // given
const sortedSquaredNumbers = transform(numbers); // perform the function on transform on the given 'numbers' array
console.log(sortedSquaredNumbers); // [9,16,25,64,81]