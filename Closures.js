/**
 * Definition: A function that remembers it's lexical scope even when executed outside that scope
 * Key Points:
 *  Enables data privacy (creating private variables)
 *  Preserves state between function calls
 */

function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
