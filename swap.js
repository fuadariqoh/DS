function swap(arr1, index1, index2) {
  let array = arr1;
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

module.exports = swap;
