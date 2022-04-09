function bubbleSort(array) {
  let noSwap;
  for (let i = array.length; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j - 1 < i; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}

function swap(arr1, index1, index2) {
  let array = arr1;
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

console.log(bubbleSort([1, 2, 3, 5, 1, 2, 7, 1, 3, 6, 8]));
