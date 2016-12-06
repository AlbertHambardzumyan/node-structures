/**
 * Stack tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const Stack = require('../index.js').Stack;

describe('Stack', function () {
    var stack = new Stack();

    describe('isEmpty', function () {
        it('should be empty', function () {
            expect(stack.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', function () {
            expect(stack.size()).to.be.equal(0);
        });
    });
    describe('Push', function () {
        it('should add a new element on top of the Stack', function () {
            var add = stack.push(7);
            expect(add).to.be.equal(true);
        });
        it('should have length 2', function () {
            stack.push(8);
            expect(stack.size()).to.be.equal(2);
        });
        it('should return false for isEmpty', function () {
            expect(stack.isEmpty()).to.be.equal(false);
        });
    });

    describe('Pop', function () {
        var stack = new Stack();
        stack.push(5);
        it('should pop the first element', function () {
            expect(stack.pop()).to.be.equal(5);
        });
        it('should have length 0', function () {
            expect(stack.size()).to.be.equal(0);
        });
        it('should throw an exception if the Stack is empty', function () {
            expect(stack.pop.bind()).to.throw(Error);
        });
    });

    describe('Peek', function () {
        var stack = new Stack();
        stack.push(10);
        it('should return the first element', function () {
            expect(stack.peek()).to.be.equal(10);
        });
        it('should have length 1', function () {
            expect(stack.size()).to.be.equal(1);
        });
        it('should throw an exception if the Stack is empty', function () {
            stack.pop();
            expect(stack.pop.bind()).to.throw(Error);
        });
    });
});
