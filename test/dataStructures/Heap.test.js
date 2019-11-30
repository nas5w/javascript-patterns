const Heap = require('../../src/dataStructures/Heap');

describe('Heap data structure', () => {
	it('should have empty heap when instantiated', () => {
		const heap = new Heap(3);
		expect(heap._storage).toEqual([undefined, undefined, undefined, undefined]);
	});
});
