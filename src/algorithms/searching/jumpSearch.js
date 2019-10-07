function jumpSearch(list, itemToFind, jumpSize = 4) {
  let step = Math.floor(Math.sqrt(jumpSize));
  let prev = 0;
  while (list[Math.min(step, list.length) - 1] < itemToFind) {
    prev = step;
    step = step + jumpSize;
    if (prev >= list.length) {
      return false;
    }
  }
  while (list[parseInt(prev)] < itemToFind) {
    prev++;
    if (prev == Math.min(step, list.length)) {
      return false;
    }
  }
  if (list[parseInt(prev)] === itemToFind) {
    return true;
  }
  return false;
}

module.exports = jumpSearch;
