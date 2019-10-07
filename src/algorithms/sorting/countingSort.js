function countingSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  var i,
    z = 0,
    count = [];

  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
  return arr;
}

module.exports = countingSort;
