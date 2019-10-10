/**
 * @description Queue Data Structure
 *
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * @description adds an element to the queue
   * @param {any} item
   * @returns {void}
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * @description removes an element from the queue
   * @returns {any}
   */
  dequeue() {
    if (this.isEmpty()) throw new Error("Can't dequeue from an empty queue");

    return this.items.shift();
  }

  /**
   * @description returns the front element of the queue
   * @returns {any}
   */
  front() {
    if (this.isEmpty()) throw new Error("Queue is empty");

    return this.items[0];
  }

  /**
   * @description checks if the queue is empty or not
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * @description gets the size of queue
   * @returns {number}
   */
  size() {
    return this.items.length;
  }
}

module.exports = Queue;
