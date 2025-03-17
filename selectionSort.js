/**
 * | Selection Sort
 */

function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }

  return arr;
}

// const sortedArray = selectionSort([-2, 45, 0, 11, -9]);
const sortedArray = selectionSort([20, 12, 10, 15, 2]);
console.log(sortedArray);
