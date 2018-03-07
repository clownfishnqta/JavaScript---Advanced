function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe('isOddOrEven', function () {
    it('should return undefined with number parameter', function () {
        expect(isOddOrEven(2)).to.equal(undefined, "Function did not return the correct result");
        expect(isOddOrEven()).to.be.undefined;
    });
    it('should return correct result with odd length of string', function () {
        expect(isOddOrEven('correct')).to.equal('odd');
    });
    it('should return correct result with even length of string', function () {
        expect(isOddOrEven('beep')).to.equal('even');
    });
});