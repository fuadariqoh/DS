const pivot = require("./pivot");

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // LEFT
    quickSort(arr, left, pivotIndex - 1);
    // RIGHT
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([1000, -3, 2, 4, 6, 2, 1, 2, 4, 1]));
