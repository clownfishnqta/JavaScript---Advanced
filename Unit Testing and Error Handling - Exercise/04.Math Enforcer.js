let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe('MathEnforcerTests',function () {
    describe('AddFiveTests',function () {
        it('should return undefined', function () {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
        it('should work with positive numbers', function () {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('should work with negative numbers', function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('should work with floating-point numbers', function () {
            expect(mathEnforcer.addFive(3.5)).to.equal(8.5);
        });
        it('should return 5', function () {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
    });

    describe('SubtractTenTests',function () {
        it('should return undefined', function () {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
        it('should work with positive numbers', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('should work with negative numbers', function () {
            expect(mathEnforcer.subtractTen(-30)).to.equal(-40);
        });
        it('should work with floating-point numbers', function () {
            expect(mathEnforcer.subtractTen(-3.5)).to.equal(-13.5);
        });
        it('should return -10', function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
    });

    describe('SumTests',function () {
        it('should return undefined', function () {
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(2)).to.be.undefined;
            expect(mathEnforcer.sum('string','anotherString')).to.be.undefined;
            expect(mathEnforcer.sum(1,'string')).to.be.undefined;
            expect(mathEnforcer.sum('string',1)).to.be.undefined;
        });
        it('should work with positive numbers', function () {
            expect(mathEnforcer.sum(10,15)).to.equal(25);
            expect(mathEnforcer.sum(0,5)).to.equal(5);
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
        it('should work with negative numbers', function () {
            expect(mathEnforcer.sum(-12,-13)).to.equal(-25);
            expect(mathEnforcer.sum(0,-2)).to.equal(-2);
            expect(mathEnforcer.sum(5,-2)).to.equal(3);
            expect(mathEnforcer.sum(-5,2)).to.equal(-3);
            expect(mathEnforcer.sum(-2,0)).to.equal(-2);
        });
        it('should work with floating-point numbers', function () {
            expect(mathEnforcer.sum(-12.5,-13.6)).to.equal(-26.1);
            expect(mathEnforcer.sum(0,-2.5)).to.equal(-2.5);
            expect(mathEnforcer.sum(5.2,-2)).to.equal(3.2);
            expect(mathEnforcer.sum(-5.4,2)).to.be.closeTo(-3.4,0.001);
            expect(mathEnforcer.sum(-2.7,0)).to.equal(-2.7);
            expect(mathEnforcer.sum(5.4,2.6)).to.equal(8);
            expect(mathEnforcer.sum(0,2.5)).to.equal(2.5);
        });
    });
});