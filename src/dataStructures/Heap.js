class Heap {
    /**
     * Constructor for Heap data structure.
	 *
	 * This is a max Heap supported by an Array. This can be modified into a min Heap
	 * by changing '>' to '<' and '<' to '>'.
	 *
	 * @class
	 *
     * @param {Number} i1
	 * @param {Number} i2
     * @returns {void}
     */
	constructor(size = 15) {
		this._storage = new Array(size + 1); // 'size' items and one shift item to make calculations easier
		this._sizeCounter = 3; // size = 2^this._sizeCounter - 1
		this._last = null; // points to the last item in the heap
	}

	/**
     * Swaps items
	 *
     * @param {Number} i1
	 * @param {Number} i2
     * @returns {void}
     */
	_swap(i1, i2) {
		[this._storage[i1], this._storage[i2]] = [this._storage[i2], this._storage[i1]];
	}

    /**
     * Moves item up the heap to the correct position
	 *
     * @param {Number} index
     * @returns {void}
     */
	_rise(index) {
		if (index === 1) { return; } // base case
		const parentIndex = Math.floor(index/2); // child items are 2*index and 2*index + 1
		// swap if < for max heap, > for min heap
		if (this._storage[parentIndex] < this._storage[index]) {
			this._swap(parentIndex, index);
			this._rise(parentIndex);
		}
	}

	/**
     * Moves item down the heap to the correct position
	 *
     * @param {Number} index
     * @returns {void}
     */
	_fall(index) {

	}

	isEmpty() {

	}

	isFull() {

	}

	increaseSize() {
		this._storage = new Array(Math.pow(2, ++this._sizeCounter));
	}

	getTop() {

	}

	peek() {

	}

	push(item) {

	}
}

module.exports = Heap;
