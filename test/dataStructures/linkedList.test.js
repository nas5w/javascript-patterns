const LinkedList = require('../../src/dataStructures/linkedList');

describe('Linked List data structure', () => {
  const list = new LinkedList();

  it ('Should have empty head and tail when instantiated', () => {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('Should add the first node as head and tail of the linked list', () => {
    list.insert(1);
    expect(list.head).toBe(list.tail);
  });

  it('Should remove one item from the linked list', () => {
    list.remove(1);
    expect(list.head).toBe(null);
  });

  it('Should print a correct representation of the linked list as string', () => {
    list.insert(1).insert(2).insert(3);
    expect(list.toString()).toBe('1, 2, 3');
  });

  it('Should traverse the linked list as an iterator', () => {
    const values = [];
    for (const value of list) values.push(value);
    expect(values).toEqual([1, 2, 3]);
  })
})
