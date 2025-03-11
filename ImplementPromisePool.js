/**
 * | ----------------------------------------------------------------------------
 * | Implement a Promise Pool – Execute a limited number of promises in parallel.
 * | ----------------------------------------------------------------------------
 */

function promisePool(promises, limit) {
    let index = 0;  // Index to keep track of the current task in the queue
    let inProgress = 0;  // Track the number of currently running promises
    let results = [];  // Store the results of resolved promises

    return new Promise((resolve, reject) => {
        // Function to process the tasks
        function processNext() {
            if (index === promises.length && inProgress === 0) {
                resolve(results); // If all tasks are finished, resolve the results
                return;
            }

            while (inProgress < limit && index < promises.length) {
                const currentIndex = index;
                const currentPromise = promises[currentIndex];

                index++; // Move to the next promise in the queue
                inProgress++;

                currentPromise
                    .then((result) => {
                        results[currentIndex] = result; // Store the result
                    })
                    .catch((error) => {
                        results[currentIndex] = error; // Store the error if promise fails
                    })
                    .finally(() => {
                        inProgress--; // One promise finished
                        processNext(); // Start the next one
                    });
            }
        }

        processNext(); // Start the process
    });
}

// Example Usage:
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const tasks = [
    delay(1000).then(() => 'Task 1 completed'),
    delay(500).then(() => 'Task 2 completed'),
    delay(1500).then(() => 'Task 3 completed'),
    delay(300).then(() => 'Task 4 completed'),
    delay(800).then(() => 'Task 5 completed'),
    delay(1200).then(() => 'Task 6 completed'),
];

// Run up to 3 promises in parallel
promisePool(tasks, 3)
    .then((results) => {
        console.log('All tasks completed:', results);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
