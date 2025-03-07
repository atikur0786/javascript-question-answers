/*
 * | -------------------------------------------------------------------------------------------
 * | Check for Palindrome – Determine if a given string reads the same backward and forward.
 * | -------------------------------------------------------------------------------------------
 */

// Function to check a string is palindrom or not
function palindromString(str) {
    const stringLength = str.length;

    if (stringLength < 0) {
        return "It's not a palindrome string";
    }

    const reverseString = [];
    for (let i = stringLength - 1; i >= 0; i--) {
        reverseString[stringLength - i - 1] = str[i];
    }

    if (reverseString.join('') === str) {
        return "It's a plaindrome string"
    } else {
        return "It's not a palindrome string";
    }
}

// Call the function
const isPalindromString = palindromString("madam");
console.log(isPalindromString);

// Function to check a number is palindrome or not
function palindromeNumber(num) {
    if (num < 0) {
        return false;
    }

    const originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

const isNumberPalindrom = palindromeNumber(123213);
console.log("Is the given number palindrom: ", isNumberPalindrom);