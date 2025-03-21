/**
 * | Remove Duplicate elements from an array
 */

function removeDuplicate(arr) {
  const result = [];
  const found = {};

  for (let i = 0; i < arr.length; i++) {
    if (!found[arr[i]]) {
      found[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 1, 2, 3];
console.log(removeDuplicate(arr));
