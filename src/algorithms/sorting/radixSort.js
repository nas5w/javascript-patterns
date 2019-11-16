function radixSort(arr) {
  let temp;
  let stop = false;
  let arrc = [];
  for(let i in arr)
    arrc[i] = arr[i];
  while(!stop) {
    for (let i = 0; i < arrc.length; i++){
        for (let j = 1; j < arrc.length; j++) {
          if ((arrc[j] % 10) < (arrc[j - 1] % 10)) {
            temp = arrc[j];
            arrc[j] = arrc[j - 1];
            arrc[j - 1] = temp;
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
          }
        }
    }
    stop = true;
    for (let z = 0; z < arrc.length; z++)
    {
      arrc[z] /= 10;
      if (arrc[z] != 0)
        stop = false;
    }
  }
  return arr;
}

module.exports = radixSort;
