const Heap = require('../../src/dataStructures/Heap');

describe('Heap data structure', () => {
	it('should have empty heap when instantiated', () => {
		const heap = new Heap(3);
		expect(heap._storage).toEqual([undefined, undefined, undefined, undefined]);
	});
});

describe('Heap private method rise', () => {
	it('should move large items up', () => {
		const heap = new Heap(3);
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		heap._rise(1);
		expect(heap._storage).toEqual([undefined, 1, 2, 3]);
		heap._rise(2);
		expect(heap._storage).toEqual([undefined, 2, 1, 3]);
		heap._rise(3);
		expect(heap._storage).toEqual([undefined, 3, 1, 2]);
	});
});
