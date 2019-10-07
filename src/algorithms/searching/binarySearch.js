/**
 * Binary search - looks at the midpoint of the sorted list
 * If midpoint = itemToFind, we're done
 * If midpoint is lower, then we look at all of the greater numbers
 * If modpoint is greater, then we look at all of the lower numbers
 * Big O = (log n)
 * @param {*} list to search from
 * @param {*} itemToFind item we want to find
 */
function binarySearch(list, itemToFind) {
    let low = 0;
    let high = list.length;
    let counter = 0;

    while(low <= high) {
        counter = counter + 1;
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        
        if (guess === itemToFind) {
            return true;
        } else if (guess > itemToFind) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}

module.exports = binarySearch;
