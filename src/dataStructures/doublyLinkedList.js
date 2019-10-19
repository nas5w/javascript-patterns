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
      newNode.previous = null;
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
    if(temp === this.head){
      temp = null;
      this.head = null;
    }
    if (temp) {
      temp.previous.next = null;
    }

    return this;
  }

  /**
   * @description return the list as a string
   * @param {void}
   * @returns returns the linked list as a string
   */

  toString() {
    let temp = this.head;
    let outputString = "";
    if (temp) {
      outputString += temp.val.toString();
      if (temp.next) {
        outputString += ", ";
      }
      temp = temp.next;
    }
    while (temp) {
      outputString += temp.val.toString();
      temp = temp.next;
      if (temp !== null) {
        outputString += ", ";
      }
    }
    return outputString;
  }
}

module.exports = DLL;