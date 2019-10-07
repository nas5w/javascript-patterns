function linearSearch(list, itemToFind) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === itemToFind) {
      return i;
    }
  }
  return false;
}

module.exports = linearSearch;
