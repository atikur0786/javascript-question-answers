/**
 * | ------------------------------------------------------------------------------------------------------------------
 * | Implement a function makeCounter that accepts an optional integer value and returns a function.
 * | When the returned function is called initially, it returns the initial value if provided, otherwise 0.
 * | The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.
 * | ------------------------------------------------------------------------------------------------------------------
 */

function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function () {
    return count++;
  };
}

const counter = makeCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
