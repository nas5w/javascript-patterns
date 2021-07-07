class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const INSERT_POSITION = ['before', 'after'];
const TRAVERSE_DIRECTION = ['forward', 'backward'];

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  includes(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  get(value) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  append(value) {
    const node = new Node(value, this.tail);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;
    return this;
  }

  // value1 = new value to insert
  // value2 = anchor value in the list to which the new value is to be added
  // position (before/after) = position relative to value2 to which value1 will be added
  insert(value1, value2, position = 'after') {
    if(!this.includes(value2) || !INSERT_POSITION.includes(position) || value2 == null) {
      return this;
    }

    const newNode = new Node(value1);
    const anchorNode = this.get(value2);
    if(position === 'after') {
      if(anchorNode === this.tail) {
        this.tail = newNode;
      }

      newNode.next = anchorNode.next;
      newNode.prev = anchorNode;
      anchorNode.next = newNode;
    } else {
      if(anchorNode === this.head) {
        this.head = newNode;
      }

      newNode.prev = anchorNode.prev;
      (anchorNode.prev || {}).next = newNode;
      anchorNode.prev = newNode;
      newNode.next = anchorNode;
    }

    return this;
  }

  remove(value) {
    if(!this.includes(value)) {
      return false;
    }

    const node = this.get(value);

    if(this.head === node) {
      this.head = node.next;
    }

    if(this.tail === node) {
      this.tail = node.prev;
    }

    (node.prev || {}).next = node.next;
    (node.next || {}).prev = node.prev;
    return true;
  }

  toString(direction = 'forward') {
    if (this.head === null || !TRAVERSE_DIRECTION.includes(direction)) {
      return '';
    }

    const key = direction === 'forward' ? 'next' : 'prev';

    const arr = [];
    let current = direction === 'forward' ? this.head : this.tail;
    while (current) {
      arr.push(current.value);
      current = current[key];
    }

    return arr.join(', ');
  }
}

module.exports = DoublyLinkedList;
