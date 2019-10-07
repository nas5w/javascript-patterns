/**
 * Fibonacci search is a comparison-based searching algorithm.
 * It makes use of Fibonacci numbers to search for elements in an sorted array
 * Let arr be the sorted array and x be the element to be searched
 * First find the smallest Fibonacci number >= length(arr)
 * If the number found is nth fibonacci number, let i = (n-2)th fibonacci number if the number is valid index
 * if x == arr[i], element found
 * else if x < arr[i], search in the lower subarray
 * else if x > arr[i], search in the higher subarray
 * @param {*} arr array to search in
 * @param {*} x element to find
 */

 function fibonacciSearch(arr, x) {
     // Initialize fibonacci numbers
     var fibNo2 = 0;
     var fibNo1 = 1;
     var fibNo = fibNo1 + fibNo2;
     
     // store length of array
     var len = arr.length
     // find the values of the fibonacci numbers
     while(fibNo < len) {
         fibNo2 = fibNo1;
         fibNo1 = fibNo;
         fibNo = fibNo1 + fibNo2;
     }

     // initialize index before starting index of the subarray i.e. lower bound
     var lowerBound = -1;

     

     // continue till elements in the subarray
     while(fibNo1 > 1) {
         // check if fibNo2 is valid index
         var i = Math.min(lowerBound + fibNo2, len - 1);

         // if the element at i is less than x
         if(arr[i] < x) {
            fibNo = fibNo1;
            fibNo1 = fibNo2;
            fibNo2 = fibNo - fibNo1;
            lowerBound = i;         
         }

         // if the element is greater than x
         else if(arr[i] < x) {
            fibNo = fibNo2;
            fibNo1 = fibNo1 - fibNo2;
            fibNo2 = fibNo - fibNo1;
         }

         // else element is found
         else {
             return i;
         }
     }

     // check for last element
     if(fibNo1 && arr[lowerBound+1] == x) {
         return lowerBound + 1;
     }    

     // element not found
     return -1;
 }

 module.exports = fibonacciSearch;

