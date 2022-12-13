// function callback(sum) {
//   return sum;
// } DON"T NEED FOR THIS ASSIGNMENT - goal was just to pass sum to callback function

function sumAsync(x, y, callback) {
  let sum = x + y;
  callback(sum);
}

/**
 * Create a function that accepts two numbers,
 * and calls the callback with the sum of those numbers
 * @param {number} x
 * @param {number} y
 * @param {Function} callback
 */
//function sumAsync(x, y, callback) {
// Your code here
//}

export default sumAsync;
