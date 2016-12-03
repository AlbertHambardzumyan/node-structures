/**
 * Stack
 */

/**
 * Constructor
 *
 * @constructor
 */
function Stack() {
    this.elements = [];
}

/**
 * Returns the size of the stack.
 *
 * @returns {Number}
 */
Stack.prototype.size = function () {
    return this.elements.length;
};

/**
 * Returns whether the stack is empty or not.
 *
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Pushes the 'element' on the top of the stack.
 *
 * @param element
 */
Stack.prototype.push = function (element) {
    return this.elements.push(element);
};

/**
 * Pops the top element of the stack & returns it.
 *
 * @throws {Error} when the stack is empty.
 */
Stack.prototype.pop = function () {
    if (this.isEmpty())
        throw new Error('Stack is empty');

    var last = this.elements[this.size() - 1];
    this.elements.pop();
    return last;
};

/**
 * Peeks the top element of the stack.
 *
 * @throws {Error} when the stack is empty.
 * @returns {*}
 */
Stack.prototype.peek = function () {
    if (this.isEmpty())
        throw new Error('Stack is empty');

    return this.elements[this.size() - 1];
};

module.exports = Stack;