function selectionSort (list) {
    const newList = [];
    let largestItem;
    while (list.length) {
        largestItem = findLargestValue(list);
        newList.push(list[largestItem]);
        list.splice(largestItem, 1);
    }
    return newList.reverse();
}

function findLargestValue (list) {
    let largestValue = list[0];
    let indexOfLargestValue = 0;
    for (let i = 0; i < list.length; i++) {
        if (largestValue < list[i]) {
            largestValue = list[i];
            indexOfLargestValue = i;
        }
    }
    return indexOfLargestValue;
}

module.exports = selectionSort;

