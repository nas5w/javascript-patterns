function mergeSort(m) {
  // Base case. A list of zero or one elements is sorted, by definition.
  if (m.length <= 1) return m;

  // Recursive case. First, divide the list into equal-sized sublists
  // consisting of the first half and second half of the list.
  // This assumes lists start at index 0.
  let left = [];
  let right = [];
  m.forEach((x, i) => {
    if (i < m.length / 2) left.push(x);
    else right.push(x);
  });

  // Recursively sort both sublists.
  left = mergeSort(left);
  right = mergeSort(right);

  // Then merge the now-sorted sublists.
  //console.log(left, right);
  return merge(left, right);
}

function merge(a, b) {
  let c = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      c.push(b.shift());
    } else {
      c.push(a.shift());
    }
  }

  a.forEach(el => c.push(el));
  b.forEach(el => c.push(el));

  return c;
}

console.log(mergeSort([1, 6, 4, 8, 4, 8, 3, 5, 2, 4, 7, 4]));
