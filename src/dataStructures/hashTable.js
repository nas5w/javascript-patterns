var LinkedList = require("./LinkedList");

class HashTable {
	constructor(length = 10, hashFunc) {
		this._ds = new Array(length);
		this._hashFunc = hashFunc ? hashFunc : this.HashFunction;
	}
	// Assume we are Hashing Strings
	HashFunction (data) {
		if(typeof data === "object") {
			data = JSON.stringify(data);
		} 

		if (typeof data !== "string") {
			data = data.toString();
		}

		return data.charCodeAt() % this._ds.length;
		
	}
	insert (data) {
		var hashed = this.HashFunction(data);
		if(!this._ds[hashed]) {
			this._ds[hashed] = data;
			return data + " added into base array at position " + hashed;
		}
		// Collision resolution using a linked list
		if(this._ds[hashed] && !this._ds[hashed].head) {
			var tmp = this._ds[hashed];
			this._ds[hashed] = new LinkedList();
			this._ds[hashed].append(tmp);
		}
		this._ds[hashed].append(hashed);
		return hashed + " added to linked list";
	}
	remove(data) {
		var hashed = this.HashFunction(data);
		if(this._ds[hashed] )
	}
}

module.exports = HashTable;