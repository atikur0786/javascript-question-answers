/**
 * Async Await
 *  - Syntax for writing asynchronous code that looks like synchronous code
 *  - Allows for more readable and maintainable asynchronous code
 *  - Uses the async keyword to define an asynchronous function and always return a Promise
 *  - Uses the await keyword to pause the execution of an asynchronous function until a Promise is resolved
 *  - Can be used with Promises or other asynchronous operations
 */

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fetching data is done!");
  });
