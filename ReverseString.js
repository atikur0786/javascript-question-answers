/*
| -------------------------------------------------------------------------
| Reverse a String – Implement a function that reverses a given string.
|--------------------------------------------------------------------------
*/

// Function to reverse a string
function reverseAString(str) {
    const reverseString = [];
    const stringLength = str.length;

    for (let i = stringLength - 1; i >= 0; i--) {
        reverseString[stringLength - i - 1] = str[i];
    }

    return reverseString;
}

// Call the function
const returnedString = reverseAString("Atikur");
console.log(returnedString);