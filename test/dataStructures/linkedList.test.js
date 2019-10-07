const LinkedList = require('../../src/dataStructures/linkedList');

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  warn: jest.fn()
}

describe('Linked List data structure', () => {
  const list = new LinkedList();

  it ('Should have empty head and tail when instantiated', () => {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('Should add the first node as head and tail of the linked list', () => {
    list.insert(1);
    expect(list.head).toBe(list.tail);
    list.remove(1);
  });

  it('Should add an element to the beggining of the linked list', () => {
    list.prepend(7);
    expect(list.head.value).toBe(7);
    list.remove(7);
  })

  it('Should remove one item from the linked list', () => {
    expect(list.head).toBe(null);
    list.insert(1).insert(2).insert(3);
    expect(list.remove(2)).toBe(true);
    list.remove(1);
    list.remove(3);
  });

  it('Should print a correct representation of the linked list as string', () => {
    list.insert(1).insert(2).insert(3);
    expect(list.toString()).toBe('1, 2, 3');
  });

  it('Should traverse the linked list as an iterator', () => {
    const values = [];
    for (const value of list) values.push(value);
    expect(values).toEqual([1, 2, 3]);
  });

  it('Should check wether an element exists in the linked list', () => {
    expect(list.includes(3)).toBe(true);
    expect(list.includes(5)).toBe(false);
  });
})
