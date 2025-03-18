/**
 * Definition of Promises.
 *  - Objects representing the eventual completion or failure of an asynchronous operation
 *  - Used to handle asynchronous operations in a more manageable and readable way
 *  - Promises have three states: pending, fulfilled, and rejected
 *  - Promises can be chained using .then(), .catch() and .finally() methods
 */

const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

promises
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise is done!");
  });
