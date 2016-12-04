# node-structures
[![Build Status](https://travis-ci.org/AlbertHambardzumyan/node-structures.svg?branch=master)](https://travis-ci.org/AlbertHambardzumyan/node-structures)
[![npm](https://img.shields.io/npm/v/node-structures.svg)](https://www.npmjs.com/package/node-structures)

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
  var Stack = require('node-structures').Stack;
  
  var stack = new Stack();
  
  stack.isEmpty();
  
  stack.push(3);
  
  stack.peek();
  
  stack.pop();

  stack.size()

# License
  MIT
