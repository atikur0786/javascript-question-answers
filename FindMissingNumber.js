/**
 * | ----------------------------------------------------------------------------------------------------------
 * | Find the Missing Number – Given an array of consecutive numbers with one missing, find the missing number.
 * | ----------------------------------------------------------------------------------------------------------
 */

// Function to find the missing number in an array
function findMissingNumber(arr) {
    const n = arr.length + 1;

    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

// Call the function
const missingNumber = findMissingNumber([1, 2, 4, 5, 6]);
console.log("Missing Number: ", missingNumber);