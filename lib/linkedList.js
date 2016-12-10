/**
 * Linked List
 */

const Node = require('./nodes/index').Node;

/**
 * Creates an empty LinkedList.
 *
 * @constructor
 */
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

/**
 * Returns the number of elements in this list.
 *
 * @returns {Number} - the number of elements in this list.
 */
LinkedList.prototype.size = function () {
    return this.length;
};

/**
 * Tests if this LinkedList is empty.
 *
 * @returns {boolean} - true if and only if this LinkedList contains no items; false otherwise.
 */
LinkedList.prototype.isEmpty = function () {
    return this.size() === 0;
};

/**
 * Inserts the specified element at the beginning of this list.
 *
 * @param data - the element to add
 */
LinkedList.prototype.addFirst = function (data) {
    if (this.isEmpty()) {
        this.head = this.tail = new Node(data);
    } else {
        const newNode = new Node(data);
        newNode.setNext(this.head);
        this.head = newNode;
    }
    this.length++;
};

/**
 * Appends the specified element to the end of this list.
 *
 * @param data - the element to add
 */
LinkedList.prototype.addLast = function (data) {
    if (this.isEmpty()) {
        this.head = this.tail = new Node(data);
    } else {
        const newNode = new Node(data);
        this.tail.setNext(newNode);
        this.tail = newNode;
    }
    this.length++;
};

/**
 * Inserts the specified element at the specified position in this list.
 * Shifts the element currently at that position (if any) and any subsequent elements to the right
 * (adds one to their indices).
 *
 * @throws IndexOutOfBoundsException - if the index is out of range (index < 0 || index >= size())
 * @param index - index at which the specified element is to be inserted
 * @param element - element to be inserted
 */
LinkedList.prototype.add = function (index, element) {
    if (index < 0 || index >= this.size())
        throw new Error('IndexOutOfBoundsException');

    var newNode = new Node(element);

    if (index === 0) {
        newNode.setNext(this.head);
        this.head = newNode;
    }
    else {
        var prev_node = this.head;
        for (; index > 1; index--)
            prev_node = prev_node.getNext();

        newNode.setNext(prev_node.getNext());
        prev_node.setNext(newNode);
    }
    this.length++;
};

/**
 * Removes the element at the specified position in this list. Shifts any subsequent elements to the left
 * (subtracts one from their indices).
 * Returns the element that was removed from the list.
 *
 * @throws IndexOutOfBoundsException - if the index is out of range (index < 0 || index >= size())
 * @param index - the index of the element to be removed
 * @returns {*} - the element previously at the specified position
 */
LinkedList.prototype.remove = function (index) {
    if (index < 0 || index >= this.size())
        throw new Error('IndexOutOfBoundsException');

    var result;
    if (index === 0) {
        result = this.head;
        this.head = this.head.getNext();
    }
    else {
        var prev_node = this.head;
        for (; index > 1; index--)
            prev_node = prev_node.getNext();

        var old_node = prev_node.getNext();
        result = old_node;
        prev_node.setNext(old_node.getNext());
    }
    this.length--;
    return result;
};

/**
 * Removes all of the elements from this list. The list will be empty after this call returns.
 */
LinkedList.prototype.clear = function () {
    while (!this.isEmpty()) {
        this.remove(0);
    }
};

/**
 * Returns the element at the specified position in this list.
 *
 * @throws IndexOutOfBoundsException - if the index is out of range (index < 0 || index >= size())
 * @param index - index of the element to return
 * @returns {*} - the element at the specified position in this list
 */
LinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size())
        throw new Error('IndexOutOfBoundsException');

    if (index == 0)
        return this.head.getValue();
    else {
        var current_node = this.head;
        for (; index > 0; index--)
            current_node = current_node.getNext();

        return current_node.getValue();
    }
};

module.exports = LinkedList;