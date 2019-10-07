const insertionSort = require("./insertionSort");

function bucketSort(arr, bucketSize = 4) {
  let minValue = arr.reduce((min, p) => (p < min ? p : min), arr[0]);
  let maxValue = arr.reduce((max, p) => (p > max ? p : max), arr[0]);

  let buckets = [];
  if (arr.length === 0) {
    return arr;
  }
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  for (let i = 0; i < bucketCount; i++) {
    buckets.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    let index_b = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[index_b].push(arr[i]);
  }
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = insertionSort(buckets[i]);
  }
  let k = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[k] = buckets[i][j];
      k++;
    }
  }
  return arr;
}

module.exports = bucketSort;
