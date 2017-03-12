/**
 * Queue tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const LinkedList = require('../').LinkedList;


describe('LinkedList', () => {
    let linkedList = new LinkedList();

    describe('isEmpty', () => {
        it('should be empty', () => {
            expect(linkedList.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', () => {
            expect(linkedList.size()).to.be.equal(0);
        });
    });

    describe('Add', () => {
        it('should insert the specified element at the beginning of this LinkedList', () => {
            linkedList.addFirst("A");
        });
        it('should have length 1', () => {
            expect(linkedList.size()).to.be.equal(1);
        });
        it('should return false for isEmpty', () => {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
        it('should insert the specified element to the end of this LinkedList', () => {
            linkedList.addLast("B");
        });
        it('should have length 2', () => {
            expect(linkedList.size()).to.be.equal(2);
        });
        it('should throw an exception if the index is wrong', () => {
            expect(linkedList.add.bind(5, "C")).to.throw(Error);
        });
        it('should insert the specified element into this LinkedList', () => {
            linkedList.add(1, "C");
        });
        it('should have length 3', () => {
            expect(linkedList.size()).to.be.equal(3);
        });
        it('should not be empty', () => {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
    });

    describe('Get', () => {
        it('should return the element at the specified position (0) in this list', () => {
            expect(linkedList.get(0)).to.be.equal("A");
        });
        it('should return the element at the specified position (1) in this list', () => {
            expect(linkedList.get(1)).to.be.equal("C");
        });
        it('should return the element at the specified position (2) in this list', () => {
            expect(linkedList.get(2)).to.be.equal("B");
        });
        it('should have length 3', () => {
            expect(linkedList.size()).to.be.equal(3);
        });
        it('should not be empty', () => {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
    });

    describe('Remove', () => {
        it('should removes the element at the specified position in this list', () => {
            expect(linkedList.remove(1).getValue()).to.be.equal("C");
        });
        it('should have length 2', () => {
            expect(linkedList.size()).to.be.equal(2);
        });
        it('should throw an exception if the index (4) is wrong', () => {
            expect(linkedList.remove.bind(4)).to.throw(Error);
        });
        it('should return the element at the specified position (0) in this list', () => {
            expect(linkedList.get(0)).to.be.equal("A");
        });
        it('should return the element at the specified position (1) in this list', () => {
            expect(linkedList.get(1)).to.be.equal("B");
        });
    });

    describe('Clear', () => {
        it('should remove all of the elements from this list', () => {
            linkedList.clear();
        });
        it('should have length 0', () => {
            expect(linkedList.size()).to.be.equal(0);
        });
        it('should be empty', () => {
            expect(linkedList.isEmpty()).to.be.equal(true);
        });
    });
});
