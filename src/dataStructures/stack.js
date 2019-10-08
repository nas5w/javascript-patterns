/*
  Stack := Is a Linear Data Structure that enables addition and deletion operations on it in a particular direction. This direction is goes by the name LIFO(Last In First Out) or FILO(First In Last Out)
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  
  // push() := to add an element into the stack from the top
  push(value = 0) {
    this.stack.unshift(value);
  }
  
  // pop() := to remove an element from the top
  pop() {
    if (this.stack.length !== 0) {
      return this.stack.shift();
    } else {
      return null;
    }
  }
  
  // peek() := returns value at the top of the stack, undefined if stack is empty
  peek() {
    return this.stack[0];
  }
  
  // isEmpty() := helper func to see if the stack is empty 
  isEmpty() {
    return this.stack.length === 0;
  }
  
  // state() := returns current state of the stack
  state() {
    return this.stack;
  }
}
