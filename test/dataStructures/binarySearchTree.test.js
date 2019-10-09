const BinarySearchTree = require('../../src/dataStructures/binarySearchTree');

describe('Binary Search Tree', () => {
    it('Should have empty root when instantiated', () => {
        const tree = new BinarySearchTree()
        expect(tree.root).toBe(null)
    });

    it('Should add new root to tree if tree is empty', () => {
        const tree = new BinarySearchTree()
        tree.insert(12);
        expect(tree.root.val).toBe(12);
    });

    it('Should add smaller valuse to left of the root', () => {
        const tree = new BinarySearchTree();
        tree.insert(99);
        tree.insert(3);
        tree.insert(23);
        expect(tree.root.left.val).toBe(3)
    });

    it('Should add smaller valuse to right of the root', () => {
        const tree = new BinarySearchTree();
        tree.insert(99);
        tree.insert(3);
        tree.insert(140);
        expect(tree.root.right.val).toBe(140);
    });

    it('Should return false if no root is found', () => {
        const tree = new BinarySearchTree();
        const node = tree.find(56)
        expect(node).toBe(false);
    });

    it('Should return false if no node with such value is found', () => {
        const tree = new BinarySearchTree();
        tree.insert(99);
        tree.insert(3);
        tree.insert(140);
        const node = tree.find(56)
        expect(node).toBe(false);
    });

    it('Should find node with specified value', () => {
        const tree = new BinarySearchTree();
        tree.insert(99);
        tree.insert(3);
        tree.insert(13);
        tree.insert(45);
        tree.insert(76);
        tree.insert(123);
        tree.insert(56);
        tree.insert(234);
        tree.insert(140);
        const node = tree.find(56);
        expect(node.val).toBe(56);
    });

    it('Should retrieve all data from the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(99);
        tree.insert(3);
        tree.insert(13);
        tree.insert(45);
        tree.insert(76);
        tree.insert(123);
        tree.insert(56);
        tree.insert(234);
        tree.insert(140);
        tree.insert(140);
        const treeValues = tree.bfs();
        console.log(treeValues);
        expect(treeValues).toEqual([99, 3, 123, 13, 234, 45, 140, 76, 140, 56]);
    });
})