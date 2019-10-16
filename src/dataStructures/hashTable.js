var LinkedList = require("./linkedList");

class HashTable {
	constructor(length = 10, hashFunc) {
		this._ds = new Array(length);
		this.HashFunction = hashFunc ? hashFunc : this._hashFunc;
	}
	// Assume we are Hashing Strings
	_hashFunc (data) {
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
			this._ds[hashed].insert(tmp);
		}
		this._ds[hashed].insert(data);
		return hashed + " added to linked list";
	}
	toString() {
		let result = "";
		this._ds.forEach(el => {
			let data =  typeof el === "object" ? el.toString() : el;
			result +=`${data},\n`;
		});
		return result
			.trim()
			.substring(0, result.length - 2);
	}
}

// let ht = new HashTable();
// 			ht.insert(10);
// 			ht.insert(10);
// ht._ds.forEach(el => { 
// 	console.log(typeof el === "object");
// });
// console.log(ht);
module.exports = HashTable;