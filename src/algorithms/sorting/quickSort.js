function quickSort(arr, first, last){
    let pivot, partitionIndex;

    if (first < last){ // Only run if array is more than one item
        pivot = last; // Setting our pivot to always be the last element in the array
        partitionIndex = partition(arr, pivot, first, last); 

        // Recursively call quickSort for elements on either side of the partitionIndex
        quickSort(arr, first, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, last);
    }
    return arr;
}

function partition(arr, pivot, first, last){ 
    const pivotValue = arr[pivot];
    let partitionIndex = first; // Keep track of where partition is, so we know where to split the array
    for (let i = first; i < last; i++){
        if (arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    // Swap the pivot element with the element currently at partition index, as we now know that all elements to the left of this index are 
    // smaller than the pivot, and all to the right are larger.
    swap(arr, last, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){ // Uses destructuring assignment to arr values at index i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = quickSort;