const Heap = require('../../src/dataStructures/Heap');

describe('Heap constructor', () => {
	it('should create empty Heap', () => {
		const heap = new Heap();
		expect(heap._storage).toEqual([undefined]);
	});
});

describe('Heap public method isEmpty', () => {
	it('should return true if no items in Heap', () => {
		const heap = new Heap();
		expect(heap.isEmpty()).toBeTrue();
	});

	it('should return false if one or more items in Heap', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		expect(heap.isEmpty()).toBeFalse();
		heap._storage[2] = 1;
		expect(heap.isEmpty()).toBeFalse();
	});
});

describe('Heap public method peek', () => {
	it('should return undefined if Heap is empty', () => {
		const heap = new Heap();
		expect(heap.peek()).toBeUndefined();
	});

	it('should return the top item', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		expect(heap.peek()).toBe(1);
	});
});

describe('Heap public method getMax', () => {
	it('should return undefined if Heap is empty', () => {
		const heap = new Heap();
		expect(heap.getMax()).toBeUndefined();
	});

	it('should return and remove the top item', () => {
		const heap = new Heap();
		heap._storage[1] = 3;
		heap._storage[2] = 2;
		heap._storage[3] = 1;
		const top = heap.getMax();
		expect(top).toBe(3);
		expect(heap._storage).toEqual([undefined, 2, 1]);
	});
});

describe('Heap public method count', () => {
	it('should return 0 for no items', () => {
		const heap = new Heap();
		expect(heap.length).toBe(0);
	});

	it('should return the number of items in Heap', () => {
		const heap = new Heap();
		heap._storage[1] = 2;
		expect(heap.length).toBe(1);
		heap._storage[2] = 1;
		expect(heap.length).toBe(2);
	});
});

describe('Heap public method push', () => {
	it('should increase the number of items in the Heap', () => {
		const heap = new Heap();
		expect(heap.length).toBe(0);
		heap.push(1);
		expect(heap.length).toBe(1);
	});

	it('should add items in the correct position', () => {
		const heap = new Heap();
		heap.push(1);
		expect(heap._storage).toEqual([undefined, 1]);
		heap.push(2);
		expect(heap._storage).toEqual([undefined, 2, 1]);
		heap.push(3);
		expect(heap._storage).toEqual([undefined, 3, 1, 2])
	});
});

describe('Heap private method rise', () => {
	it('should not move top item', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._rise(1);
		expect(heap._storage).toEqual([undefined, 1, 2]);
	});

	it('should not move items in the correct position', () => {
		const heap = new Heap();
		heap._storage[1] = 2;
		heap._storage[2] = 1;
		heap._storage[3] = 3;
		heap._rise(2);
		expect(heap._storage).toEqual([undefined, 2, 1, 3]);
	});

	it('should move large items up', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		heap._rise(2);
		expect(heap._storage).toEqual([undefined, 2, 1, 3]);
		heap._rise(3);
		expect(heap._storage).toEqual([undefined, 3, 1, 2]);
	});
});

describe('Heap private method fall', () => {
	it('should not move items with no children', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		heap._fall(3);
		expect(heap._storage).toEqual([undefined, 1, 2, 3]);
	});

	it('should not move items in the correct position', () => {
		const heap = new Heap();
		heap._storage[1] = 4;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		heap._fall(1);
		expect(heap._storage).toEqual([undefined, 4, 2, 3]);
	});

	it('should move small items down', () => {
		const heap = new Heap();
		heap._storage[1] = 1;
		heap._storage[2] = 2;
		heap._storage[3] = 3;
		heap._fall(1);
		expect(heap._storage).toEqual([undefined, 3, 2, 1]);
	});
});
