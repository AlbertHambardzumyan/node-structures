/**
 * Queue tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const Queue = require('../index.js').Queue;

describe('Queue', function () {

    describe('isEmpty', function () {
        var queue = new Queue();
        it('should be empty', function () {
            expect(queue.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', function () {
            expect(queue.size()).to.be.equal(0);
        });
    });

    describe('Add', function () {
        var queue = new Queue();
        it('should insert the specified element into this Queue', function () {
            var add = queue.add(7);
            expect(add).to.be.equal(true);
        });
        it('should have length 2', function () {
            queue.add(8);
            expect(queue.size()).to.be.equal(2);
        });
        it('should return false for isEmpty', function () {
            expect(queue.isEmpty()).to.be.equal(false);
        });
    });

    describe('Remove', function () {
        var queue = new Queue();
        queue.add(5);
        it('should retrieve and remove the head of this Queue', function () {
            expect(queue.remove()).to.be.equal(5);
        });
        it('should have length 0', function () {
            expect(queue.size()).to.be.equal(0);
        });
        it('should throw an exception if the Queue is empty', function () {
            expect(queue.remove.bind()).to.throw(Error);
        });
    });

    describe('Poll', function () {
        var queue = new Queue();
        queue.add(5);
        it('should retrieve and remove the head of this Queue', function () {
            expect(queue.poll()).to.be.equal(5);
        });
        it('should have length 0', function () {
            expect(queue.size()).to.be.equal(0);
        });
        it('should return null if this Queue is empty', function () {
            expect(queue.poll.bind()).to.throw(null);
        });
    });

    describe('Peek', function () {
        var queue = new Queue();
        queue.add("A");
        it('should retrieve, but does not remove, the head of this queue', function () {
            expect(queue.peek()).to.be.equal("A");
        });
        it('should have length 1', function () {
            expect(queue.size()).to.be.equal(1);
        });
        it('should returns null if this Queue is empty', function () {
            queue.remove();
            expect(queue.peek.bind()).to.throw(null);
        });
    });
});
