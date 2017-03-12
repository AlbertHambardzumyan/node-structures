/**
 * PriorityQueue
 */

/**
 * Creates an empty PriorityQueue with custom comparator or the default one.
 *
 * @param comparator
 * @constructor
 */
function PriorityQueue(comparator) {
    this._elements = [];
    this._comparator = comparator || PriorityQueue._DEFAULT_COMPARATOR;
}

/**
 * Returns the number of elements in this collection
 *
 * @returns {Number} - the number of elements in this collection
 */
PriorityQueue.prototype.size = function () {
    return this._elements.length;
};

/**
 * Tests if this priority queue is empty.
 *
 * @returns {boolean} - true if and only if this priority queue contains no items; false otherwise.
 */
PriorityQueue.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Retrieves, but does not remove, the head of this priority queue, or returns null if this priority queue is empty.
 *
 * @returns {*} Returns the head of this priority queue, or null if this priority queue is empty.
 */
PriorityQueue.prototype.peek = function () {
    return !this.isEmpty() ? this._elements[0] : null;
};

/**
 * Retrieves and removes the head of this priority queue, or returns null if this priority queue is empty.
 *
 * @returns {*} Returns the head of this priority queue, or null if this priority queue is empty.
 */
PriorityQueue.prototype.poll = function () {
    return !this.isEmpty() ? this._elements.shift() : null;
};

/**
 * Inserts the specified element into this priority queue.
 *
 * @param element - the element to add
 * @returns {boolean} Returns true
 */
PriorityQueue.prototype.add = function (element) {
    let j;
    if (this.isEmpty())
        return !!this._elements.push(element);
    else {
        for (j = this.size() - 1; j >= 0; j--) {
            if (this._compare(element, this._elements[j]) > 0)
                this._elements[j + 1] = this._elements[j]; // shift upward
            else
                break;
        }

        this._elements[j + 1] = element;
        return true;
    }
};


/**
 * Compares `a` and `b`, when `a > b` it returns a positive number, when `a` = `b` it returns 0,
 *  and when `a < b` it returns a negative number.
 *
 * @param a
 * @param b
 * @returns {number}
 * @private
 */
PriorityQueue._DEFAULT_COMPARATOR = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a - b;

    a = a.toString();
    b = b.toString();

    if (a == b)
        return 0;

    return (a > b) ? 1 : -1;
};

/**
 * Compares the values at position `a` and `b` in the priority queue using its comparator function.
 *
 * @param a
 * @param b
 * @returns {*}
 * @private
 */
PriorityQueue.prototype._compare = function (a, b) {
    return this._comparator(a, b);
};

module.exports = PriorityQueue;