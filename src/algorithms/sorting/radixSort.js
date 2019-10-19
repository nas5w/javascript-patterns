const getDigit = (number, digit) => {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
};

const getNumberOfDigits = number => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const getMaxDigits = array => {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(getNumberOfDigits(array[i]), maxDigits);
  }
  return maxDigits;
};

const radixSort = numbers => {
  const passes = getMaxDigits(numbers);
  for (let i = 0; i < passes; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < numbers.length; j++) {
      let digit = getDigit(numbers[j], i);
      buckets[digit].push(numbers[j]);
    }
    numbers = [].concat(...buckets);
  }

  return numbers;
};
