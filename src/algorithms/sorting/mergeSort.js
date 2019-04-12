function mergeSort(m) {
  if (m.length <= 1) return m;
  let left = [];
  let right = [];
  m.forEach((x, i) => {
    if (i < m.length / 2) left.push(x);
    else right.push(x);
  });
  left = mergeSort(left);
  right = mergeSort(right);
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

module.exports = mergeSort;
