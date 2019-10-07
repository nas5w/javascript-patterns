const linearSearch = require('../../../src/algorithms/searching/linearSearch');

describe('Linear Search algorithm', () => {
    it('Find the indexes of the desired element in the array', () => {
      const indexes = linearSearch([1, 2, 6, 6, 4, 6, 9], 6);
      expect(indexes).toEqual([2, 3, 5]);
    });

    it('Should return an empty array if nothing is found', () => {
      const indexes = linearSearch([1, 2, 6, 6, 4, 6, 9], 11);
      expect(indexes).toEqual([]);
    });
});
