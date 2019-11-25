class Heap {
	constructor(size = 15, isMax = 1) {
		this._storage = new Array(size + 1); // 'size' items and one shift item to make calculations easier
		this._sizeCounter = 3; // size = 2^this._sizeCounter - 1
		this._last = null; // points to the last item in the heap
		this._isMax = isMax; // Max Heap or Min Heap
	}

	_rise(item_index) {

	}

	_fall(item_index) {

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
