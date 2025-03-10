/**
 * | -----------------------------------------------------------------------------------------------------
 * | Count Vowels in a String – Write a function that counts the number of vowels in a given string.
 * | -----------------------------------------------------------------------------------------------------
 */

// Function to count vowels in a string
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// Call the function
const vowelCount = countVowels("Atikur Satter Mondal");
console.log(vowelCount);
