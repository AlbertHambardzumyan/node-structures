/**
 * Queue tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const PriorityQueue = require('../index.js').PriorityQueue;


describe('Priority Queue', () => {
    let priorityQueue = new PriorityQueue();

    describe('size', () => {
        it('should have length 0', () => {
            expect(priorityQueue.size()).to.be.equal(0);
        });
    });

    describe('isEmpty', () => {
        it('should be empty', () => {
            expect(priorityQueue.isEmpty()).to.be.equal(true);
        });
    });

    describe('Add', () => {
        it('should insert the specified element', () => {
            expect(priorityQueue.add(50)).to.be.equal(true);
        });
        it('should have length 1', () => {
            expect(priorityQueue.size()).to.be.equal(1);
        });
        it('should return false for isEmpty', () => {
            expect(priorityQueue.isEmpty()).to.be.equal(false);
        });
        it('should insert the specified element', () => {
            expect(priorityQueue.add(60)).to.be.equal(true);
        });
        it('should have length 2', () => {
            expect(priorityQueue.size()).to.be.equal(2);
        });
        it('should insert the specified element', () => {
            expect(priorityQueue.add(10)).to.be.equal(true);
        });
        it('should have length 3', () => {
            expect(priorityQueue.size()).to.be.equal(3);
        });
        it('should not be empty', () => {
            expect(priorityQueue.isEmpty()).to.be.equal(false);
        });
        it('should insert the specified element', () => {
            expect(priorityQueue.add(100)).to.be.equal(true);
        });
        it('should have length 3', () => {
            expect(priorityQueue.size()).to.be.equal(4);
        });
        it('should not be empty', () => {
            expect(priorityQueue.isEmpty()).to.be.equal(false);
        });
    });

    describe('Peek', () => {
        it('should retrieve, but does not remove, the head of this priority Priority Queue', () => {
            expect(priorityQueue.peek()).to.be.equal(100);
        });
    });

    describe('Poll', () => {
        it('should retrieve and remove the head of this Priority Queue', () => {
            expect(priorityQueue.poll()).to.be.equal(100);
        });
        it('should have length 3', () => {
            expect(priorityQueue.size()).to.be.equal(3);
        });
        it('should retrieve and remove the head of this Priority Queue', () => {
            expect(priorityQueue.poll()).to.be.equal(60);
        });
        it('should have length 2', () => {
            expect(priorityQueue.size()).to.be.equal(2);
        });
        it('should retrieve and remove the head of this Priority Queue', () => {
            expect(priorityQueue.poll()).to.be.equal(50);
        });
        it('should have length 1', () => {
            expect(priorityQueue.size()).to.be.equal(1);
        });
        it('should retrieve and remove the head of this Priority Queue', () => {
            expect(priorityQueue.poll()).to.be.equal(10);
        });
        it('should have length 0', () => {
            expect(priorityQueue.size()).to.be.equal(0);
        });
        it('should retrieve and remove the head of this Priority Queue: should get null', () => {
            expect(priorityQueue.poll()).to.be.equal(null);
        });
        it('should retrieve, but does not remove, the head of this priority Priority Queue: should get null', () => {
            expect(priorityQueue.peek()).to.be.equal(null);
        });
    });
});
