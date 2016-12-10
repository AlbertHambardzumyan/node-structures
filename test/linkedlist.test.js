/**
 * Queue tests.
 */

const chai = require('chai'),
    expect = chai.expect;

const LinkedList = require('../index.js').LinkedList;

describe('LinkedList', function () {
    var linkedList = new LinkedList();

    describe('isEmpty', function () {
        it('should be empty', function () {
            expect(linkedList.isEmpty()).to.be.equal(true);
        });
        it('should have length 0', function () {
            expect(linkedList.size()).to.be.equal(0);
        });
    });

    describe('Add', function () {
        it('should insert the specified element at the beginning of this LinkedList', function () {
            linkedList.addFirst("A");
        });
        it('should have length 1', function () {
            expect(linkedList.size()).to.be.equal(1);
        });
        it('should return false for isEmpty', function () {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
        it('should insert the specified element to the end of this LinkedList', function () {
            linkedList.addLast("B");
        });
        it('should have length 2', function () {
            expect(linkedList.size()).to.be.equal(2);
        });
        it('should throw an exception if the index is wrong', function () {
            expect(linkedList.add.bind(5, "C")).to.throw(Error);
        });
        it('should insert the specified element into this LinkedList', function () {
            linkedList.add(1, "C");
        });
        it('should have length 3', function () {
            expect(linkedList.size()).to.be.equal(3);
        });
        it('should not be empty', function () {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
    });

    describe('Get', function () {
        it('should return the element at the specified position (0) in this list', function () {
            expect(linkedList.get(0)).to.be.equal("A");
        });
        it('should return the element at the specified position (1) in this list', function () {
            expect(linkedList.get(1)).to.be.equal("C");
        });
        it('should return the element at the specified position (2) in this list', function () {
            expect(linkedList.get(2)).to.be.equal("B");
        });
        it('should have length 3', function () {
            expect(linkedList.size()).to.be.equal(3);
        });
        it('should not be empty', function () {
            expect(linkedList.isEmpty()).to.be.equal(false);
        });
    });

    describe('Remove', function () {
        it('should removes the element at the specified position in this list', function () {
            expect(linkedList.remove(1).getValue()).to.be.equal("C");
        });
        it('should have length 2', function () {
            expect(linkedList.size()).to.be.equal(2);
        });
        it('should throw an exception if the index (4) is wrong', function () {
            expect(linkedList.remove.bind(4)).to.throw(Error);
        });
        it('should return the element at the specified position (0) in this list', function () {
            expect(linkedList.get(0)).to.be.equal("A");
        });
        it('should return the element at the specified position (1) in this list', function () {
            expect(linkedList.get(1)).to.be.equal("B");
        });
    });

    describe('Clear', function () {
        it('should remove all of the elements from this list', function () {
            linkedList.clear();
        });
        it('should have length 0', function () {
            expect(linkedList.size()).to.be.equal(0);
        });
        it('should be empty', function () {
            expect(linkedList.isEmpty()).to.be.equal(true);
        });
    });
});
