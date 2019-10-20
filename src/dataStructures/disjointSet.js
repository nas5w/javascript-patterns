class Node{
	constructor(data) {
        this.rank = null; // depth  of the tree
        this.data = data;
        this.parent = this;
    }
}

class DisjointSet{
	
	constructor(){
		this.map = new Object();
	}

	makeSet(val){
		var node = new Node(val);
		this.map[val] = node;
	}

	union(val1, val2){
		var node1 = this.map[val1];
		var node2 = this.map[val2];

		var parent1 = this.findSet(node1);
		var parent2 = this.findSet(node2);

		//if they are part of same set do nothing
		if(parent1.data == parent2.data)
			return

		if(parent1.rank >=parent2.rank){
			//increment rank only if both sets have same rank
			parent1.rank = (parent1.rank == parent2.rank) ? parent1.rank + 1 : parent1.rank;
            parent2.parent = parent1;
		} else {
			parent1.parent = parent2
		}

		return true ;
	}

	findSet(node){
		var parent = node.parent ;
		if(parent == node) 
			return parent

		return this.findSet(node.parent);
	}
}

module.exports = DisjointSet ;