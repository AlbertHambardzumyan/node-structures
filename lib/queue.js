/**
 * Queue
 */

/**
 * Creates an empty Queue.
 *
 * @constructor
 */
function Queue() {
    this.elements = [];
}

/**
 * Returns the size of the queue.
 *
 * @returns {Number} - the size of the queue.
 */
Queue.prototype.size = function () {
    return this.elements.length;
};

/**
 * Tests if this queue is empty.
 *
 * @returns {boolean} - true if and only if this queue contains no items; false otherwise.
 */
Queue.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Inserts the specified element into this queue.
 *
 * @param element - the element to add
 * @returns {boolean} Returns true
 */
Queue.prototype.add = function (element) {
    return !!this.elements.push(element);
};

/**
 * Retrieves and removes the head of this queue. This method differs from poll only in that it throws an exception
 *  if this queue is empty.
 *
 * @throws {Error} when the queue is empty.
 * @returns {*} Returns the head of this queue
 */
Queue.prototype.remove = function () {
    if (this.isEmpty())
        throw new Error('Queue is empty');

    return this.elements.shift();
};


/**
 * Retrieves and removes the head of this queue, or returns null if this queue is empty.
 *
 * @returns {*} Returns the head of this queue, or null if this queue is empty.
 */
Queue.prototype.poll = function () {
    return !this.isEmpty() ? this.elements.shift() : null;
};

/**
 * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
 *
 * @returns {*} Returns the head of this queue, or null if this queue is empty.
 */
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : null;
};

module.exports = Queue;