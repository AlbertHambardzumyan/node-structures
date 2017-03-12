/**
 * Stack tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const Stack = require('../').Stack;


describe('Stack', () => {

    describe('isEmpty', () => {
        let stack = new Stack();
        it('should be empty', () => {
            expect(stack.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', () => {
            expect(stack.size()).to.be.equal(0);
        });
    });
    describe('Push', () => {
        let stack = new Stack();
        it('should add a new element on top of the Stack', () => {
            const add = stack.push(7);
            expect(add).to.be.equal(true);
        });
        it('should have length 2', () => {
            stack.push(8);
            expect(stack.size()).to.be.equal(2);
        });
        it('should return false for isEmpty', () => {
            expect(stack.isEmpty()).to.be.equal(false);
        });
    });

    describe('Pop', () => {
        let stack = new Stack();
        stack.push(5);
        it('should pop the first element', () => {
            expect(stack.pop()).to.be.equal(5);
        });
        it('should have length 0', () => {
            expect(stack.size()).to.be.equal(0);
        });
        it('should throw an exception if the Stack is empty', () => {
            expect(stack.pop.bind()).to.throw(Error);
        });
    });

    describe('Peek', () => {
        let stack = new Stack();
        stack.push(10);
        it('should return the first element', () => {
            expect(stack.peek()).to.be.equal(10);
        });
        it('should have length 1', () => {
            expect(stack.size()).to.be.equal(1);
        });
        it('should throw an exception if the Stack is empty', () => {
            stack.pop();
            expect(stack.pop.bind()).to.throw(Error);
        });
    });
});
