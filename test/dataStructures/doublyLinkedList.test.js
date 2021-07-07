const DoublyLinkedList = require('../../src/dataStructures/doublyLinkedList');

describe('Doubly linked list data structure', () => {
  it ('Should have empty head and tail when instantiated', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('Should add the first node as head and tail of the list', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    expect(list.head).toBe(list.tail);
  });

  it('Should check whether an element is in the list', () => {
    const list = new DoublyLinkedList();
    list.append(1).append(2).append(3);
    expect(list.includes(2)).toBe(true);
    expect(list.includes(4)).toBe(false);
  });

  it('Should be able to get an element from the list', () => {
    const list = new DoublyLinkedList();
    expect(list.get(1)).toBe(null);

    list.append(1).append(2).append(3);
    expect(list.get(2).value).toBe(2);
    expect(list.get(4)).toBe(null);
  });

  it('Should be able to remove an item from the list', () => {
    const list = new DoublyLinkedList();
    expect(list.remove(1)).toBe(false);

    list.append(1).append(2).append(3).append(4).append(5);
    expect(list.remove(2)).toBe(true);
    expect(list.remove(6)).toBe(false);

    list.remove(1);
    expect(list.head.value).toBe(3);

    list.remove(5);
    expect(list.tail.value).toBe(4);
  });

  it('Should update references of neighboring elements of removed element', () => {
    const list = new DoublyLinkedList();
    list.append(1).append(2).append(3).append(4);
    expect(list.get(2).next.value).toBe(3);

    list.remove(3);
    expect(list.get(2).next.value).toBe(4);
  });
  
  it('Should be able to insert an element into the list', () => {
    const list = new DoublyLinkedList();
    list.append(1).append(2).append(3);
    expect(list.get(2).next.value).toBe(3);

    list.insert(2.5, 2, 'after');
    expect(list.get(2).next.value).toBe(2.5);

    list.insert(2.25, 2.5, 'before');
    expect(list.get(2.5).prev.value).toBe(2.25);

    list.insert(4, 3, 'position');
    expect(list.includes(4)).toBe(false);

    list.insert(4, 3, 'after');
    expect(list.tail.value).toBe(4);

    list.insert(0, 1, 'before');
    expect(list.head.value).toBe(0);
  });

  it('Should print a correct representation of the list as string', () => {
    const list = new DoublyLinkedList();
    expect(list.toString()).toBe('');

    list.append(1).append(2).append(3).append(4).append(5);
    expect(list.toString()).toBe('1, 2, 3, 4, 5');
    expect(list.toString('backward')).toBe('5, 4, 3, 2, 1');
    expect(list.toString('direction')).toBe('');
  });
});
