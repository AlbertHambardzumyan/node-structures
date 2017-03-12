/**
 * Stack
 */

/**
 * Creates an empty Stack.
 *
 * @constructor
 */
function Stack() {
    this._elements = [];
}

/**
 * Returns the size of the stack.
 *
 * @returns {Number} - the size of the stack.
 */
Stack.prototype.size = function () {
    return this._elements.length;
};

/**
 * Tests if this stack is empty.
 *
 * @returns {boolean} - true if and only if this stack contains no items; false otherwise.
 */
Stack.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Pushes an item onto the top of this stack.
 *
 * @param item - the item to be pushed onto this stack.
 * @returns {boolean} - true if the item is pushed.
 */
Stack.prototype.push = function (item) {
    return !!this._elements.push(item);
};

/**
 * Removes the object at the top of this stack and returns that object as the value of this function.
 *
 * @throws {Error} - if this stack is empty.
 * @returns {*} - the object at the top of this stack (the last item of the Vector object).
 */
Stack.prototype.pop = function () {
    if (this.isEmpty())
        throw new Error('Stack is empty');

    const item = this._elements[this.size() - 1];
    this._elements.pop();
    return item;
};

/**
 * Looks at the object at the top of this stack without removing it from the stack.
 *
 * @throws {Error} - if this stack is empty.
 * @returns {*} - the object at the top of this stack (the last item of the Vector object).
 */
Stack.prototype.peek = function () {
    if (this.isEmpty())
        throw new Error('Stack is empty');

    return this._elements[this.size() - 1];
};

module.exports = Stack;