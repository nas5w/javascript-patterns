class Queue {
  constructor() {
    this.dataStore = [];
  }

  /**
   * @name enqueue
   * @param {String} elem
   * @description
   * handler function which will add new element in queue
   */
  enqueue(element) {
    this.dataStore.push(element);
  }

  /**
   * @name dequeue
   * @description
   * handler function which will remove element from queue
   * @returns {String} RemoveElement
   */
  dequeue() {
    return this.dataStore.shift();
  }

  /**
   * @name front
   * @description
   * handler function which provide the first element in queue
   * @returns {String} FrontElement
   */
  front() {
    return this.dataStore[0];
  }
  /**
   * @name back
   * @description
   * handler function which provide the last element in queue
   * @returns {String} BackElement
   */
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  /**
   * @name empty
   * @description
   * handler function which will clear queue
   * @returns {Array} EmptyQueue
   */
  empty() {
    this.dataStore = [];
    return this.dataStore;
  }
}

module.exports = Queue;
