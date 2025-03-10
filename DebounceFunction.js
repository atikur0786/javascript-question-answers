/**
 * | --------------------------------------------------------------------------------------------------------------
 * | Implement a Debounce Function – Create a function that delays execution until after a certain time has passed.
 * | --------------------------------------------------------------------------------------------------------------
 */

// Function to implement debounce
function debounceFunction(mainFunction, delay) {
    // Declare a variable called 'timer' to store the timer ID
    let timer;

    // Return an anonymous function that takes in any number of arguments
    return function (...args) {
        // Clear the previous timer to prevent the execution of 'mainFunction'
        clearTimeout(timer);

        // Set a new timer that will execute 'mainFunction' after the specified delay
        timer = setTimeout(() => {
            mainFunction(...args);
        }, delay);
    };

}

// Define a function called 'searchData' that logs a message to the console
function searchData() {
    console.log("searchData executed");
}

// Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
const debouncedSearchData = debounceFunction(searchData, 300);

// Call the debounced version of 'searchData'
debouncedSearchData();