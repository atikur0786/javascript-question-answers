/**
 * | -------------------------------------------------------------------------------
 * | Implement a function mean(array) that returns the mean (also known as average)
 * | of the values inside array, which is an array of numbers.
 * | -------------------------------------------------------------------------------
 */

function mean(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

const arr = [1, 2, 2];

console.log(mean(arr));
