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
		
	})
})