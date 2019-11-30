class Heap {
    /**
     * Constructor for Heap data structure.
	 *
	 * This is a max Heap supported by an Array. This can be modified into a min Heap
	 * by swapping the item comparisons. The Heap is intended for Number items, but can be
	 * modified for any item.
	 *
	 * @class
	 *
     * @param {Number} i1
	 * @param {Number} i2
     * @returns {void}
     */
	constructor() {
		this._storage = new Array(1);
		this._last = null; // points to the last item in the heap
	}

	/**
     * Returns number of items in Heap.
	 *
     * @returns {Number}
     */
	get length() {
		return this._storage.length-1;
	}

	/**
     * Swaps items.
	 *
     * @param {Number} i1
	 * @param {Number} i2
     * @returns {void}
     */
	_swap(i1, i2) {
		[this._storage[i1], this._storage[i2]] = [this._storage[i2], this._storage[i1]];
	}

    /**
     * Moves item up the heap to the correct position.
	 *
     * @param {Number} index
     * @returns {void}
     */
	_rise(index) {
		if (index === 1) { return; } // base case: top item
		const parentIndex = Math.floor(index/2); // child items are 2*index and 2*index + 1
		// swap if < for max heap, > for min heap
		if (this._storage[parentIndex] < this._storage[index]) {
			this._swap(parentIndex, index);
			this._rise(parentIndex);
		}
	}

	/**
     * Moves item down the heap to the correct position.
	 *
     * @param {Number} index
     * @returns {void}
     */
	_fall(index) {
		if (2*index >= this._storage.length) { return; } // base case: no children
		const childIndex = 2*index+1 >= this._storage.length ?
							2*index // one child (left)
							: this._storage[2*index] > this._storage[2*index+1] ? // two children
							2*index
							: 2*index+1; // compare with largest child
		if (this._storage[childIndex] > this._storage[index]) {
			this._swap(childIndex, index);
			this._fall(childIndex);
		}
	}

	/**
     * Returns true if there are no items in the Heap, otherwise false.
	 *
     * @returns {Boolean}
     */
	isEmpty() {
		return this._storage.length === 1;
	}

	/**
     * Returns the top item in Heap.
	 *
	 * If the Heap is empty, returns undefined.
	 *
     * @returns {Number}
     */
	peek() {
		return this._storage[1];
	}

	/**
     * Returns and removes the top item in Heap.
	 *
	 * If the Heap is empty, returns undefined.
	 *
     * @returns {Number}
     */
	getMax() {
		if (this.isEmpty()) { return; }
		this._swap(1, this._storage.length-1); // swap top item and last item
		const top = this._storage.pop();
		this._fall(1);
		return top;
	}

	push(item) {

	}
}

module.exports = Heap;
