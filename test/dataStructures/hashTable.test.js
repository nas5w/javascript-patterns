const HashTable = require('../../src/dataStructures/hashTable');

describe("Hash Table", () => {
	describe("Hash Function", () => {
		// Proper Data Type return
		it("Should take an int return an int", () => {
			let ht = new HashTable();
			let hashed = ht.HashFunction(10);
			let test = typeof hashed;
			expect(test).toBe("number");
		});
		it("Should take an object return an int", () => {
			let ht = new HashTable();
			let hashed = ht.HashFunction({Hi: 22});
			let test = typeof hashed;
			expect(test).toBe("number");
		});
		it("Should take an boolean return an int", () => {
			let ht = new HashTable();
			let hashed = ht.HashFunction(false);
			let test = typeof hashed;
			expect(test).toBe("number");
		});
		it("Should take an array return an int", () => {
			let ht = new HashTable();
			let hashed = ht.HashFunction([1, 3]);
			let test = typeof hashed;
			expect(test).toBe("number");
		});
		// Create a custom hashing function
		it("Should take an array return an int", () => {
			let customFunc = () => "passed";
			let ht = new HashTable(10,customFunc);
			let hashed = ht.HashFunction([1, 3]);

			expect(hashed).toBe("passed");
		});
	});

	describe("insert", () => {
		it("should initally insert into the base array", () => {
			let ht = new HashTable();
			ht.insert(10);
			let test = false;
			ht._ds.forEach(el => { 
				if(el > 0) test = true });
			expect(test).toBe(true);
		});
		it("should have one datat type of object", () => {
			let ht = new HashTable();
			ht.insert(10);
			ht.insert(10);
			let test = false;
			ht._ds.forEach(el => { 
				if(typeof el === "object") test = true; });
			expect(test).toBe(true);
		});
	});

	describe("toString", () => {
		it("should not be an empty string", () => {
			let ht = new HashTable();
			ht.insert(10);
			expect(ht.toString()).toBe("10");
		})
	});

	describe("remove", () => {
		it("should remove item from array", () => {
			let ht = new HashTable();
			ht.insert(10);
			let test = ht.remove(10) >= 0 ? true : false;
			expect(test).toBe(true)
		})
	})
})