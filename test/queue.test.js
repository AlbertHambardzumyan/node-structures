/**
 * Queue tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const Queue = require('../index.js').Queue;


describe('Queue', () => {

    describe('isEmpty', () => {
        let queue = new Queue();
        it('should be empty', () => {
            expect(queue.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', () => {
            expect(queue.size()).to.be.equal(0);
        });
    });

    describe('Add', () => {
        let queue = new Queue();
        it('should insert the specified element into this Queue', () => {
            let add = queue.add(7);
            expect(add).to.be.equal(true);
        });
        it('should have length 2', () => {
            queue.add(8);
            expect(queue.size()).to.be.equal(2);
        });
        it('should return false for isEmpty', () => {
            expect(queue.isEmpty()).to.be.equal(false);
        });
    });

    describe('Remove', () => {
        let queue = new Queue();
        queue.add(5);
        it('should retrieve and remove the head of this Queue', () => {
            expect(queue.remove()).to.be.equal(5);
        });
        it('should have length 0', () => {
            expect(queue.size()).to.be.equal(0);
        });
        it('should throw an exception if the Queue is empty', () => {
            expect(queue.remove.bind()).to.throw(Error);
        });
    });

    describe('Poll', () => {
        let queue = new Queue();
        queue.add(5);
        it('should retrieve and remove the head of this Queue', () => {
            expect(queue.poll()).to.be.equal(5);
        });
        it('should have length 0', () => {
            expect(queue.size()).to.be.equal(0);
        });
        it('should return null if this Queue is empty', () => {
            expect(queue.poll.bind()).to.throw(null);
        });
    });

    describe('Peek', () => {
        let queue = new Queue();
        queue.add("A");
        it('should retrieve, but does not remove, the head of this queue', () => {
            expect(queue.peek()).to.be.equal("A");
        });
        it('should have length 1', () => {
            expect(queue.size()).to.be.equal(1);
        });
        it('should returns null if this Queue is empty', () => {
            queue.remove();
            expect(queue.peek.bind()).to.throw(null);
        });
    });
});
