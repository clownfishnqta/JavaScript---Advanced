const Sumator = require('./Sumator');
const expect = require('chai').expect;



describe("Sumator Unit Test", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    it('should test if arrays is empty', function () {
        expect(sumator.data.length).to.be.equal(0);
    });
    describe("Test if functions exist", function () {
        it('should test if data exists', function () {
            expect(sumator.data !== undefined).to.equal(true);
        });
        it('should test if sumNums func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });
        it('should test if removeByFilter func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });
        it('should test if toString func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });

    });
    describe("add function test", function () {
        it('should test with numbers', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3');
        });
        it('should test with strings', function () {
            sumator.add("Gosho");
            sumator.add("Pesho");
            sumator.add("Ivan");
            expect(sumator.data.join(', ')).to.be.equal('Gosho, Pesho, Ivan');
        });
        it('should test with objects', function () {
            sumator.add({name: "Pesho"});
            sumator.add({});
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        });
        it('should test with mixed variables', function () {
            sumator.add({name: "Kiril"});
            sumator.add(4);
            sumator.add("Ivan");
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, Ivan')
        });
    });
    describe("sumNums test", function () {
        it('should test with numbers', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(12);
        });
        it('should test with strings', function () {
            sumator.add("Gosho");
            sumator.add("Pesho");
            sumator.add("Ivan");
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('should test with objects', function () {
            sumator.add({name: "Pesho"});
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(0)
        });
        it('should test with mixed variables', function () {
            sumator.add({name: "Kiril"});
            sumator.add("Ivan");
            expect(sumator.sumNums()).to.be.equal(0)
        });
    });
    describe("filter by function test", function () {
        it('should filter odd numbers', function () {
            for (let i = 0; i <= 5; i++){
                sumator.add(i);
            }
            sumator.removeByFilter(x => x % 2 !==0);
            expect(sumator.data.join(', ')).to.be.equal("0, 2, 4")
        });
    });
    describe("test toString method", function () {
        it('should test with items in array', function () {
            sumator.add(4);
            sumator.add("Gosho");
            expect(sumator.toString()).to.be.equal("4, Gosho")
        });
        it('should test with empty array', function () {
            expect(sumator.toString()).to.be.equal("(empty)")
        });
    });
});
