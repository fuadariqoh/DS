function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}
console.log(insertionSort([1, 2, 1, 3, 60, 5, 12, 3, 14, 3]));
