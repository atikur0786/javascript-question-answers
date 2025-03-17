/**
 * | Bubble Sort
 */

function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sortedArray = bubbleSort([-2, 45, 0, 11, -9]);
console.log(sortedArray);
