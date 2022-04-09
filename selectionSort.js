const selectionSort = (arr) => {
  // loop through array from start to finish
  //   let indexMinimum;
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }
  return arr;
};

function swap(arr1, index1, index2) {
  let array = arr1;
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

console.log(selectionSort([2, 2, 3, 25, 13, 21, 1, 2, 3]));
