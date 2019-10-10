const binarySearch = require("./binarySearch");

/**
 * Exponential search - A slight optimization for binary search,
 * finds an upper bound for where the item can be, then 
 * performs binary search on this smaller sublist.
 * 
 * Useful for unbounded lists.  
 * 
 * Big O = (log n)
 * @param {*} list to search from
 * @param {*} itemToFind item we want to find
 */
function exponentialSearch(list, itemToFind) {
  if(list.length <= 1) return false;

  let bound = 1;

  while(bound < list.length && list[bound] < itemToFind) {
      bound *= 2;
  }
  
  if(bound < list.length) {
    return binarySearch(list.slice(0,bound), itemToFind);
  }

  return false;
}

module.exports = exponentialSearch;
