# node-structures
[![Build Status](https://travis-ci.org/AlbertHambardzumyan/node-structures.svg?branch=master)](https://travis-ci.org/AlbertHambardzumyan/node-structures)
[![npm](https://img.shields.io/npm/v/node-structures.svg)](https://www.npmjs.com/package/node-structures) 
[![Code Climate](https://codeclimate.com/github/AlbertHambardzumyan/node-structures/badges/gpa.svg)](https://codeclimate.com/github/AlbertHambardzumyan/node-structures)

  Basic Data Structures for use in JavaScript (server-side, client side)
    
# Description
  The Library provides the following Data Structure Implementations

  1. Stack
  
# Installation 
Server-side:
    npm install node-structures
    
Client-side:
  bower install node-structures
  
# Usage

###Stack
```` javascript
  const Stack = require('node-structures').Stack;
  let stack = new Stack();
  
  /**
   * Tests if this stack is empty.
   * @returns {boolean} - true if and only if this stack contains no items; false otherwise.
   */
  stack.isEmpty();
  
  /**
   * Pushes an item onto the top of this stack.
   * @param item - the item to be pushed onto this stack.
   * @return {boolean} - true if the item is pushed.
   */
  stack.push(3);
  
  /**
   * Looks at the object at the top of this stack without removing it from the stack.
   * @throws {Error} - if this stack is empty.
   * @returns {*} - the object at the top of this stack (the last item of the Vector object).
   */
  stack.peek();
  
  /**
   * Removes the object at the top of this stack and returns that object as the value of this function.
   * @throws {Error} - if this stack is empty.
   * @return {*} - the object at the top of this stack (the last item of the Vector object).
   */
  stack.pop();
  
  /**
   * Returns the size of the stack.
   * @returns {Number} - the size of the stack.
   */
  stack.size();
````

###Queue
```` javascript
  const Queue = require('node-structures').Queue;
  let queue = new Queue();
  
 /**
  * Tests if this queue is empty.
  * @returns {boolean} - true if and only if this queue contains no items; false otherwise.
  */
  queue.isEmpty();
  
/**
 * Inserts the specified element into this queue.
 * @param element - the element to add
 * @return {boolean} Returns true
 */
  queue.add(3);
  
/**
 * Retrieves and removes the head of this queue. This method differs from poll only in that it throws an exception
 *  if this queue is empty.
 * @throws {Error} when the queue is empty.
 * @return {*} Returns the head of this queue
 */
  queue.remove();
  
/**
 * Retrieves and removes the head of this queue, or returns null if this queue is empty.
 * @returns {*} Returns the head of this queue, or null if this queue is empty.
 */
  queue.poll();
  
/**
 * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
 * @returns {*} Returns the head of this queue, or null if this queue is empty.
 */
  queue.peek();
````
# License
  MIT
