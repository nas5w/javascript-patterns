const DisjointSet = require('../../src/dataStructures/disjointSet');

describe('Disjoint Set data structure', () => {

	it ('Should have empty Disjoint Set Map when instantiated', () => {
		const disjointSet = new DisjointSet();
		expect(Object.keys(disjointSet.map).length).toBe(0);
	});

	it('Should add the nodes to Disjoint Set', () => {
		const disjointSet = new DisjointSet();
		disjointSet.makeSet(1);
		disjointSet.makeSet(2);
		disjointSet.makeSet(3);

		expect(Object.keys(disjointSet.map).length).toBe(3);
		expect(disjointSet.map['1'].data).toBe(1);
		expect(disjointSet.map['1'].parent).toBe(disjointSet.map['1']);
	});

	it('Should check the parent after union to Disjoint Set', () => {
		const disjointSet = new DisjointSet();
		disjointSet.makeSet(1);
		disjointSet.makeSet(2);
		disjointSet.makeSet(3);

		disjointSet.union(1,2);
		disjointSet.union(2,3);

		expect(disjointSet.map['2'].parent).toBe(disjointSet.map['1']);
		expect(disjointSet.map['3'].parent).toBe(disjointSet.map['1']);
	});

	it('Should check the rank after union to Disjoint Set', () => {
		const disjointSet = new DisjointSet();
		disjointSet.makeSet(1);
		disjointSet.makeSet(2);
		disjointSet.makeSet(3);

		disjointSet.union(1,2);
		disjointSet.union(3,2);
		disjointSet.union(2,2);
		

		expect(disjointSet.map['1'].rank).toBe(1);
		expect(disjointSet.map['2'].rank).toBe(null);
		expect(disjointSet.map['3'].rank).toBe(null);
	});

})

