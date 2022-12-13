/**
 * In the function,
 *
 * 1) Accept an array v
 * 2) call the callback on each element of the array v
 * 3) the callback will return a value - use this value and store it in a new array
 * 4) for each iteration, the value returned from the callback, should replace the value in the previous array
 * 5) you should return the new array with the new value
 *
 * example:
 * const numbers = [1,2,3,4,5];
 * const newNumbers = map(numbers, (number) => {
 *  return number + 3;
 * });
 * console.log(newNumbers); // [4,5,6,7,8];
 *
 * @param {number[]} array
 * @param {Function} callback
 */

let array = [1, 2, 3, 4, 5];

function map(array, callback) {
  array.forEach((aNumber) => callback(aNumber));
  let newNumbersArray = array.map(callback);
  console.log(`The new array is ${newNumbersArray}`);
  return newNumbersArray;
}

console.log(`The original array was ${array}`);
map(array, (callback = (aNumber) => aNumber + 3));
