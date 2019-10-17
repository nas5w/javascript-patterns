const Stack = require('../../src/dataStructures/Stack');

describe('Stack data structure', () => {

  it ('Should have empty stack when instantiated', () => {
    const stack = new Stack();
    expect(stack.top).toBe(0);
    expect(stack.dataStore.length).toBe(0);
  });

  it('Should add the first item on top', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.dataStore.toString()).toBe('1');
  });


  it('Should remove items from the top of the stack', () => {
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('Should print a correct representation of the stack as string', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.dataStore.toString()).toBe('1,2,3');
  });

  it('Should peek top element from stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('Should check the length of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.length()).toBe(3);
  });

  it('Should clear the contents of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.clear()
    expect(stack.length()).toBe(0);
  });
})
