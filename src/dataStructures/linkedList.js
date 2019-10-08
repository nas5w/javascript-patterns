class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const n = new Node(value);

    if (this.head === null) {
      this.head = n;
      this.tail = n;
      return this;
    }

    this.tail.next = n;
    this.tail = n;
    return this;
  }

  prepend(value) {
    const n = new Node(value, this.head);
    this.head = n;

    if (this.tail === null) {
      this.tail = n;
    }

    return this;
  }

  remove(value) {
    if (this.head === null) return false;

    let current = this.head;

    if (current.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }

    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
      return true;
    }

    return false;
  }

  includes(value) {
    if (this.head === null) return false;

    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  traverse(callback) {
    let current = this.head;

    while (current) {
      callback(current);
      current = current.next;
    }
  }

  toString() {
    let str = "";
    this.traverse(node => {
      str += node.value;
      if (node.next !== null) str += ", ";
    });
    return str;
  }
}

class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.current = list.head;
  }

  next() {
    if (this.current === null) {
      return { done: true };
    }

    const value = this.current.value;
    this.current = this.current.next;

    return { value, done: false };
  }
}

LinkedList.prototype[Symbol.iterator] = function() {
  return new LinkedListIterator(this);
};

module.exports = LinkedList;
