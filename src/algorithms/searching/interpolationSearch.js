/**
 * Interpolation search - estimates where the target value might be depending on the high and low values
 * requires an evenly distributed list or it will not work
 * @param {Array} list sorted and evenly distributed array of numbers
 * @param {Number} item
 */
function interpolationSearch(list, item) {
  let low = 0,
    high = list.length - 1;
  while (low < high && list[low] != list[high]) {
    let mid = Math.floor(
      low + ((high - low) / (list[high] - list[low])) * (item - list[low])
    );
    if (list[mid] == item) return mid;
    else {
      if (list[mid] < item) low = mid - 1;
      else high = mid - 1;
    }
  }
  if (list[low] == item) return low;
  return NaN;
}

module.exports = interpolationSearch;
