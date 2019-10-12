const Queue = require('../../src/dataStructures/Queue');

describe('Queue data structure', () => {

  it ('Should have empty Queue when instantiated', () => {
    const queue = new Queue();
    expect(queue.dataStore.length).toBe(0);
  });

  it('Should add the item in last in queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.back()).toBe(2);
  });


  it('Should remove items from the front in the Queue', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('Should print a correct representation of the queue as string', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dataStore.toString()).toBe('1,2,3');
  });

  it('Should peek front element from queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front()).toBe(1);
  });
  it('Should peek back element from queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.back()).toBe(3);
  });
  it('Should empty queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.empty().length).toBe(0);
  });
})
