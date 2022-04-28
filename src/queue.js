const {NotImplementedError} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  values = [];

  getUnderlyingList() {
    return this.getList(0);
  }

  getList(i) {
    if (this.values[i] === undefined)
      return null;

    return {
      value: this.values[i],
      next: this.getList(i + 1)
    };
  }

  enqueue(value) {
    this.values.push(value);
  }

  dequeue() {
    const value = this.values[0];
    this.values = this.values.slice(1);
    return value;
  }
}

module.exports = {
  Queue
};
