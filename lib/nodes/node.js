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
    this._value = value;
    this._next = next || null;
}

/**
 * Get the value of the node.
 *
 * @returns
 */
Node.prototype.getValue = function () {
    return this._value;
};

/**
 * Get the next node.
 *
 * @returns
 */
Node.prototype.getNext = function () {
    return this._next;
};

/**
 * Set the next node.
 *
 * @param next
 */
Node.prototype.setNext = function (next) {
    this._next = next;
};

module.exports = Node;