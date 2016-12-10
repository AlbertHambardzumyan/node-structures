/**
 * Node
 */

/**
 * Creates a Node.
 *
 * @param value
 * @param next
 * @constructor
 */
function Node(value, next) {
    this.value = value;
    this.next = next || null;
}

/**
 * Get the value of the node.
 *
 * @returns
 */
Node.prototype.getValue = function () {
    return this.value;
};

/**
 * Set the value of the node.
 *
 * @param value
 */
Node.prototype.setValue = function (value) {
    this.value = value;
};

/**
 * Get the next node.
 *
 * @returns
 */
Node.prototype.getNext = function () {
    return this.next;
};

/**
 * Set the next node.
 *
 * @param next
 */
Node.prototype.setNext = function (next) {
    this.next = next;
};

module.exports = Node;