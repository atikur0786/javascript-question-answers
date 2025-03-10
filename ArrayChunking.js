/**
 * | --------------------------------------------------------------------------
 * | Array Chunking – Split an array into smaller arrays of a given size.
 * | --------------------------------------------------------------------------
 */

// Function to create array chunks
function arrayChunking(arr, chunkSize) {
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  console.log(chunkedArray);
}

arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
