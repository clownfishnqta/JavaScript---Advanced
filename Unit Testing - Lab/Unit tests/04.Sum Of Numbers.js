describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 2 for [1, 1]", function() {
        expect(sum([1, 1])).to.be.equal(2);
    });
    it("should return 4 for [1, 3]", function() {
        expect(sum([1, 3])).to.be.equal(4);
    });
});
