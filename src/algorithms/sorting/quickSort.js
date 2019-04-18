const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const x = arr[0]; // grab 1 number to be compared to
  const xss = arr.slice(1); // remove one number above
  const smaller = quickSort(xss.filter(xs => xs <= x));
  const bigger = quickSort(xss.filter(xs => xs > x));
  return [...smaller, x, ...bigger];
};

module.exports = quickSort;
