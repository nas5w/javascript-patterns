class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return node;
        }
        let current = this.root;
        while (current) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left
            }
            if (val > current.val) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right
            }
        }
    }

    find(val) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return current;
            }
            if (current.right && val > current.val) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }

    // Breath first search
    bfs() {
        let node = this.root;
        const queue = [node];
        const data = [];
        while (queue.length) {
            node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            data.push(node.val);
        }
        return data;
    }
}

module.exports = BinarySearchTree;