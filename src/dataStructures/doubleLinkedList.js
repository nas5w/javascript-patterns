class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }   
}

class DoubleLinkedList {
    
    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0;
        this.current = null;
    }

    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            this.current = this.head;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    pop() {
        if (!this.head) return null;
        const previousNode = this.tail.prev;
        const value = this.tail.value;
        if (previousNode) {
            if (this.current === this.tail) {
                this.current  = previousNode;
            }
            previousNode.next = null;
            this.tail = previousNode;
            this.length--;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
            this.current = null;
        }
        return { value, start: this.current === this.head, end: this.current === this.tail} ;
    }


    insertAtBegining(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length = 1;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    removeFirst() {
        if (!this.head) return null;
        const node = this.head.next;
        if (node) {
            node.prev = null;
            this.head = node;            
            this.current = this.head;

            this.length--;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
            this.current = null;
        }
    }

    contains(value) {
        if (!this.head) return false;
        let position = this.head;
        while (position) {
            if (position.value === value) return true;
            position = position.next;
        }
        return false;
    }

    next() {
        if (this.length === 0) return null;
        if (!this.current.next) return {value: null, end: true, start: this.current.prev === null};
        const { value } = this.current;
        this.current = this.current.next;

        return {value, end: this.current.next === null, start: this.current.prev === null}
    }

    prev() {
        if (this.length === 0) return null;
        if (!this.current.prev) return {value: null, end:this.current.next === null, start: true };
        const {value} = this.current;
        this.current = this.current.prev;
        return {value, end: this.current.next === null, start:this.current === null};
    }

    moveToStart() {
        this.current = this.head;
        return this.currentValue();
    }

    moveToEnd() {
        this.current = this.tail;
        return this.currentValue();
    }

    /**
     * Return null if the current item is null - should only happen in empty list
     * Otherwise returns an object with the value, and boolean for start and end of list
     */
    currentValue() {
        if (!this.current) return null;
        let {value, next } =  this.current;
        return {value, end: this.current === this.tail, start: this.current === this.head}
    }
}


module.exports = DoubleLinkedList;