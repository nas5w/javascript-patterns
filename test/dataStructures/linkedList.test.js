const LinkedList = require('../../src/dataStructures/linkedList');

describe('Linked List data structure', () => {

  it ('Should have empty head and tail when instantiated', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('Should add the first node as head and tail of the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head).toBe(list.tail);
  });

  it('Should add an element to the beggining of the linked list', () => {
    const list = new LinkedList();
    list.prepend(7);
    expect(list.head.value).toBe(7);
  })

  it('Should remove items from the linked list', () => {
    const list = new LinkedList();
    list.insert(1).insert(2).insert(3);
    expect(list.remove(3)).toBe(true);
    expect(list.remove(1)).toBe(true);
    expect(list.remove(2)).toBe(true);
    expect(list.remove(5)).not.toBe(true);
  });

  it('Should print a correct representation of the linked list as string', () => {
    const list = new LinkedList();
    list.insert(1).insert(2).insert(3);
    expect(list.toString()).toBe('1, 2, 3');
  });

  it('Should traverse the linked list as an iterator', () => {
    const list = new LinkedList();
    list.insert(1).insert(2).insert(3);

    const values = [];
    for (const value of list) values.push(value);

    expect(values).toEqual([1, 2, 3]);
  });

  it('Should check wether an element exists in the linked list', () => {
    const list = new LinkedList();
    list.insert(3);
    expect(list.includes(3)).toBe(true);
    expect(list.includes(5)).toBe(false);
    list.remove(3);
    expect(list.includes(3)).toBe(false);
  });
})
