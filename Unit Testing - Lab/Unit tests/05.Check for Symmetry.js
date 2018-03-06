describe('isSymmetric(arr)', function () {
    it('should return true for [1,2,3,3,2,1]', function () {
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it('should return false for [1,2,3,3,5,1]', function () {
        let symmetric = isSymmetric([1,2,3,3,5,1]);
        expect(symmetric).to.be.equal(false);
    });
    it('should return false for [1,2]', function () {
        let symmetric = isSymmetric([1,2]);
        expect(symmetric).to.be.equal(false);
    });
    it('should return false for -1,2,3,3,5,1', function () {
        let symmetric = isSymmetric(-1,2,3,3,5,1);
        expect(symmetric).to.be.equal(false);
    });
});