class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
  }

  /**
   * @description insert an element to the end
   * @param {any} val element to add
   * @returns returns the linked list
   */

  insertToStart(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  /**
   * @description insert an element to the start
   * @param {any} val element to add
   * @returns returns the linked list
   */

  insertToEnd(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.insertToStart(val);
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.previous = temp;
    }

    return this;
  }

  /**
   * @description delete an element from the start
   * @param {void}
   * @returns returns the linked list
   */

  deleteStart() {
    //console.log("deleted value is: " + this.head.val);
    this.head.next.previous = null;
    this.head = this.head.next;

    return this;
  }

  /**
   * @description delete an element from the end
   * @param {void}
   * @returns returns the linked list
   */

  deleteEnd() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    //console.log("deleted value is: " + temp.val);
    temp.previous.next = null;

    return this;
  }

  /**
   * @description output the list to the console
   * @param {void}
   * @returns {void}
   */

  displayList() {
    let temp = this.head;
    while (temp.next) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  /**
   * @description return the list as a string
   * @param {void}
   * @returns returns the linked list as a string
   */

  toString() {
    let temp = this.head;
    let outputString = "";
    while (temp.next) {
      outputString += temp.val.toString();
      temp = temp.next;
    }
    return outputString;
  }
}

// Usage Example

/* const dll = new DLL();
console.log(dll.insertToStart(5));
console.log(dll.insertToStart(6));
console.log(dll.insertToEnd(7));
console.log(dll.insertToEnd(8));
console.log(dll.deleteStart());
console.log(dll.deleteEnd());
 */
