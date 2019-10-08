class Stack {
  constructor() {
    this.top = 0;
    this.dataStore = [];
  }
  /**
      * @name push
      * @param {String} elem
      * @description
      * handler function which will add new element in stack and increament top value by 1
      */
  push(element) {
    this.dataStore[this.top++] = element;
  }
  /**
      * @name pop
      * @param {String} elem 
      * @description
      * handler function which will remove element in stack and decreament top value by 1
      * @returns {String} RemoveElement
      */
  pop() {
    this.top--;
    return this.dataStore.pop()
  }
  /**
    * @name peek
    * @param {String} elem 
    * @description
    * handler function which provide the top element on stack
    * @returns {String} TopElement
    */
  peek() {
    return this.dataStore[this.top - 1];
  }
  /**
    * @name length
    * @param {String} elem 
    * @description
    * handler function which provide the length on element
    * @returns {Number}
    */
  length() {
    return this.top;
  }
  /**
       * @name clear
       * @description
       * handler function which will clear stack
       * @returns {Void}
       */
  clear() {
    this.top = 0;
    this.dataStore = []
  }
}

module.exports = Stack