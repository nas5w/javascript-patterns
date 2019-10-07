function insertionSort(arr) {
  if (arr.length === 0) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let maxValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > maxValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
      arr[j + 1] = maxValue;
    }
    arr[j + 1] = maxValue;
  }
  return arr;
}

module.exports = insertionSort;
