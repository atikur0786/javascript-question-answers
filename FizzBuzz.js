/*
| -------------------------------------------------------------------------
| FizzBuzz – Print numbers 1 to 100; replace multiples of 3 with "Fizz", 
| multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
|--------------------------------------------------------------------------
*/

// Function to print numbers 1 to 100
function printFizzBuzzNumber() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call the function
printFizzBuzzNumber();
