/**
 * | ----------------------------------------------------------------------------------------
 * | Find the Maximum Number – Write a function that returns the maximum value in an array.
 * | ----------------------------------------------------------------------------------------
 */

// Function to find teh maximum number
function findMaxNumber(arr) {
    let max = arr[0];
    const arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const maxNumber = findMaxNumber([-2, -5, -8, -9, -12, -10]);
console.log("Max number is in the given array is: ", maxNumber);