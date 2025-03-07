/**
 * | ------------------------------------------------------------------------------------
 * | Factorial Calculation – Implement a function to compute the factorial of a number.
 * | ------------------------------------------------------------------------------------
 */

// Function to calculate factorial of a number
function factorialOfNum(num) {
    if (num < 0) {
        return "Factorial of negative number is not possible";
    }

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

const factorial = factorialOfNum(5);
console.log(factorial);

// Recursive function to calculate factorial
function recursiveFactorialOfNum(num) {
    if (num > 1) {
        return num * recursiveFactorialOfNum(num - 1);
    } else {
        return 1;
    }
}

const recursiveFactorial = recursiveFactorialOfNum(5);
console.log(recursiveFactorial);