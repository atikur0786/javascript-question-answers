/**
 * | ------------------------------------------------------------------------
 * | Flatten Nested Arrays – Convert a deeply nested array into a flat array.
 * | ------------------------------------------------------------------------
 */

// Function to flatten nested arrays;
// Example: [[1, 2], [3, 4], [5, 6, 7], [8], [9, 10]];
function flatternAnArray(arr) {
    const finalArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            finalArray.push(arr[i][j]);
        }
    }

    return finalArray;
}

// Call the function
const flatternArray = flatternAnArray([[1, 2], [3, 4], [5, 6, 7], [8], [9, 10]]);
console.log(flatternArray);